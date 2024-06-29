import React from "react";
import { Link } from "react-router-dom";
import images01 from "../images/Group 140.png";
import "../assets/styles/aboutus.css";

const AboutUs = () => {
  return (
    <section id="about" className=" d-flex align-item-center aboutcls">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  Welcome to About Page <br />
                  <strong className="brand-name ">MEDICO</strong>
                </h1>
                <h2 className="my-2">
                We strive to empower patients and providers by bridging the 
                gap between healthcare and cutting-edge technology
                  <br /> <br />
                  Absolutely! Medico represents our unwavering commitment to revolutionizing healthcare. Our mission extends beyond mere technology; 
                  it’s about empowering patients and enhancing their healthcare journey. 😊
                  <br /> <br />
                  You’re very welcome! We’re excited to continue our journey together, transforming healthcare for the better. If you have any more questions or need assistance, feel free to reach out anytime. 😊
                </h2>
                <div className="mt-3">
                  <Link to="/service" className="btn-get-started">
                    Contact Now
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2  about-img">
                <img
                  src={images01}
                  style={{ height: "82vh" }}
                  className="img-fluid animated"
                  alt="about image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
