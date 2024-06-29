import React from "react";
import { Navbar, Nav, NavDropdown, Container, Badge } from "react-bootstrap";
import {
  FaUser,
  FaCapsules,
  FaStethoscope,
  FaAddressBook,
  FaTty,
  FaToggle
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import logo from "../images/ehealth.svg";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { doctorInfo } = useSelector((state) => state.choice);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <header>
      <Navbar
        variant="dark"
        style={{
          background:
            "linear-gradient(170deg, rgb(40, 198, 167), rgb(50, 77, 146))",
        }}
        expand="lg"
        collapseOnSelect
      >
        <Container fluid style={{ margin: "0rem 4.8rem" }}>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img alt="logo" src={"https://banner2.cleanpng.com/20180728/xcp/kisspng-health-care-public-health-medicine-hospital-cupped-hands-5b5bed5c4cf652.0198420915327511963153.jpg"} width="40px" />
              MEDICO
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/Medicine">
                <Nav.Link>
                  <FaCapsules /> Medicine
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Doctor">
                <Nav.Link>
                  <FaStethoscope /> Doctor
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Blood">
                <Nav.Link>
                  <FaStethoscope /> Blood
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Contactus">
                <Nav.Link>
                  <FaTty /> Contact Us
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Aboutus">
                <Nav.Link>
                  <FaAddressBook /> About Us
                </Nav.Link>
              </LinkContainer>
              {!userInfo ? (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <FaUser /> Sign In
                  </Nav.Link>
                </LinkContainer>
              ) : userInfo && userInfo.isAdmin ? (
                <>
                  <NavDropdown title={userInfo.name} id="username">
                    <LinkContainer to="/admin/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Admin" id="adminmenu">
                    <LinkContainer to="/admin/medicinelist">
                      <NavDropdown.Item>Medicines</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/orderlist">
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/appointmentlist">
                      <NavDropdown.Item>Appointments</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/requestlist">
                      <NavDropdown.Item>Blood Request</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/userlist">
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/bloodlist">
                      <NavDropdown.Item>Bloods</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/doctorlist">
                      <NavDropdown.Item>Doctors</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/chat">
                      <NavDropdown.Item>Chat</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                  </>
              ) : (
                userInfo &&
                !userInfo.isAdmin && (
                  <>
                    <NavDropdown title={userInfo.name} id="username">
                      <LinkContainer to="/myprofile">
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/cart">
                        <NavDropdown.Item>
                          Cart
                          {cartItems.length > 0 && (
                            <Badge
                              pill
                              bg="success"
                              style={{ marginLeft: "5px" }}
                            >
                              {cartItems.reduce((a, c) => a + c.qty, 0)}
                            </Badge>
                          )}
                        </NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/placeappointment">
                        <NavDropdown.Item>
                          Appointment
                          {doctorInfo.length > 0 && (
                            <Badge
                              pill
                              bg="success"
                              style={{ marginLeft: "5px" }}
                            >
                              *
                            </Badge>
                          )}
                        </NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/chat">
                        <NavDropdown.Item>Chat</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
