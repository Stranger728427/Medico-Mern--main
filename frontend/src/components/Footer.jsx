import React from "react";
import { CDBSidebarFooter, CDBLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import logo from "../images/ehealth.svg";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <CDBSidebarFooter
      className="shadow"
      style={{
        background:
          "linear-gradient(170deg, rgb(107, 142, 35), rgb(85, 107, 47)",
      }}
    >
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "80%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              <img alt="logo" src={"https://banner2.cleanpng.com/20180728/xcp/kisspng-health-care-public-health-medicine-hospital-cupped-hands-5b5bed5c4cf652.0198420915327511963153.jpg"} width="30px" /> MEDICO
            </p>

            <p className="my-3" style={{ width: "250px" }}>
            We provide top-tier resources and tools to support developers in their 
            project development journey.
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Medico
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBLink href="/">Resources</CDBLink>
              <CDBLink href="/">About Us</CDBLink>
              <CDBLink href="/">Contact</CDBLink>
              <CDBLink href="/">Blog</CDBLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Help
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBLink href="/">Support</CDBLink>
              <CDBLink href="/">Sign Up</CDBLink>
              <CDBLink href="/">Sign In</CDBLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Service
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBLink href="/">Medicine</CDBLink>
              <CDBLink href="/">Doctor</CDBLink>
              <CDBLink href="/">Blood</CDBLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">
          &copy; Medico @ {currentYear} All rights reserved.
        </small>
      </CDBBox>
    </CDBSidebarFooter>
  );
};

export default Footer;
