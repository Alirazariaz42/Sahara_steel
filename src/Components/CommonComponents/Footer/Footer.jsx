import React from "react";
import {
  Call,
  CallOutlined,
  FacebookOutlined,
  Instagram,
  LinkedIn,
  LocationOn,
  Mail,
  MailOutline,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <div className=" container-fluid bg-black text-light">
        <div className=" row w-100 m-0 p-md-4 p-2">
          <div className="col-md-3 col-sm-6 col-12 d-flex justify-content-center">
            <div>
              <h1 className=" text-center">
                <img src={require("../../../Images/logofooter.png")} alt="" />
              </h1>
              <p className=" p-3 text-light">
                From large-scale commercial projects to smaller residential
                structures, our team of skilled and certified professionals is
                dedicated to delivering top-quality result. Trust{" "}
                <strong>Sahara Steel </strong>
                to bring your vision to life with precision and excellence.
              </p>

              <div>
                <span className="text-light "> Follow Us </span>
                <span className=" p-2">
                  {" "}
                  <Instagram />
                </span>
                <span className=" p-2">
                  {" "}
                  <FacebookOutlined />
                </span>
                <span className=" p-2">
                  {" "}
                  <LinkedIn />
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-12 d-flex justify-content-center">
            <div>
              <h5 className=" mb-4 mt-3">Quick Links</h5>
              <p className="  mb-2">
                {" "}
                <Link to="/" className=" text-decoration-none   text-light">
                  Home
                </Link>
              </p>
              <p className="  mb-2 ">
                {" "}
                <Link
                  to="/Services"
                  className="text-decoration-none    text-light"
                >
                  Services
                </Link>
              </p>

              <p className="   mb-2">
                {" "}
                <Link
                  to="/AboutUs"
                  className="text-decoration-none    text-light"
                >
                  About us
                </Link>
              </p>
              <p className="   mb-2">
                {" "}
                <Link
                  to="Saftey"
                  className=" text-decoration-none   text-light"
                >
                  Safety
                </Link>
              </p>
              <p className="   mb-2">
                {" "}
                <Link
                  to="ContactUs"
                  className=" text-decoration-none   text-light"
                >
                  Contact us
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-12 d-flex justify-content-center">
            <div>
              <h5 className=" mb-4 mt-3">Our Services</h5>

              <p className="  mt-3  mb-2">
                {" "}
                <Link
                  to="/ErectionStructural"
                  className=" text-decoration-none   text-light"
                >
                  Erection of Structural Steel
                </Link>
              </p>
              <p className="  mt-3  mb-2">
                {" "}
                <Link
                  to="/CivilConcrete"
                  className=" text-decoration-none   text-light"
                >
                  Civil/Concrete
                </Link>
              </p>
              <p className="  mt-3  mb-2">
                {" "}
                <Link
                  to="/Enginerring_n_Fabrication"
                  className=" text-decoration-none   text-light"
                >
                  Engineering & Fabrication
                </Link>
              </p>
              <p className="  mt-3  mb-2">
                {" "}
                <Link
                  to="/CertifiedWelding"
                  className=" text-decoration-none   text-light"
                >
                  Certified Welding
                </Link>
              </p>

              {/* <p>Engineering & Fabrication</p>
              <p>Certified Welding</p> */}
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-12 d-flex justify-content-center">
            {" "}
            <div className="text-center">
              <h5 className="  mb-4 mt-3">Contact Us</h5>
              {/* <p>
                {" "}
                <LocationOn /> Location
              </p> */}
              <p>
                {" "}
                <CallOutlined />{" "}
                <a style={{ color: "white" }} href="tel:+718-233-6300">
                  {" "}
                  +718-233-6300
                </a>
              </p>
              <p>
                {" "}
                <MailOutline />{" "}
                {/* <a
                  style={{ color: "white" }}
                  href="mailto:estimating@saharacontractingco.com"
                >
                  <span></span>
                  <span style={{ marginLeft: "0px" }}>contractingco.com</span>
                </a> */}
                <a
                  className=" text-light "
                  style={{ textDecoration: "none" }}
                  href="mailto:estimating@saharacontractingco.com"
                >
                  <span>estimating@sahara</span>{" "}
                  <span style={{ marginLeft: "-4px" }}>contractingco.com</span>
                </a>
              </p>
            </div>
          </div>{" "}
        </div>
      </div>
      <p
        style={{
          backgroundColor: "grey",
          padding: "5px",
          textAlign: "center",
          fontWeight: "600",
          margin: "0px",
          color: "black",
        }}
      >
        Copyright © 2024 Sahara Steel Designed By{" "}
        <a href="https://mfbzone.com/" target="blank">
          {" "}
          <span style={{ color: "#008000" }}>MF</span>{" "}
          <span style={{ color: "#c94d00" }}>Bzone</span>
        </a>{" "}
      </p>
    </div>
  );
};
