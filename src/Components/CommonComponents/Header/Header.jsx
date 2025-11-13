import React, { useContext } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
// import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
// import AcUnitIcon from '@mui/icons-material/AcUnit';
import {
  Call,
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Mail,
  MailOutline,
} from "@mui/icons-material";
import { MyContext } from "../../../Store/Context";
export const Header = () => {
  // const contextvalues = useContext(MyContext);
  // const openForm = ()=>{
  //   contextvalues.ChangeFormEvent();
  // }
  const openForm = useContext(MyContext);

  const OpenForm = () => {
    openForm.SetValue();
  };
  return (
    <>
      <div className="HeaderNav">
        <div className="container-fluid text-center">
          <div className=" d-flex justify-content-between flex-sm-row  flex-column   ">
            <div className=" m-0">
              <span>
                {" "}
                <MailOutline />{" "}
                <a
                  className=" text-light "
                  style={{ textDecoration: "none" }}
                  href="mailto:estimating@saharacontractingco.com"
                >
                  <span>estimating@sahara</span>{" "}
                  <span style={{ marginLeft: "-4px" }}>contractingco.com</span>
                </a>
              </span>
              <span>
                {" "}
                <Call />{" "}
                <a style={{ color: "white" }} href="tel:+1 838-334-6728">
                  {" "}
                  +718-233-6300
                </a>
              </span>
            </div>

            <div className=" hide">
              Follow Us
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
      </div>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          fixed=""
          className="bg-body-tertiary mb-0 p-1 navbar p-0"
        >
          <Container fluid>
            <Navbar.Brand className=" ms-sm-4 ms-0" href="#">
              <img
                src={require("../../../Images/Logo.png")}
                className="logoonsmallscreen"
                alt=""
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                  <Nav.Link>
                    <NavLink className={"RedirectLink"} to="/">
                      Home
                    </NavLink>
                  </Nav.Link>

                  <Nav.Link>
                    <NavLink className={"RedirectLink"} to="Services">
                      Services
                    </NavLink>
                  </Nav.Link>

                  <NavDropdown
                    className="DropDownArrow  DropDownContainer"
                    title=""
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/Services">
                      <NavLink
                        className="nav-link"
                        style={{ textDecoration: "none", color: "white" }}
                        to="/ErectionStructural"
                      >
                        {" "}
                        Erection of Structural
                        <span className="hidenolargCreeen">
                          <br />
                        </span>
                        & Miscellaneous Steel{" "}
                      </NavLink>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/Services">
                      <NavLink
                        className="nav-link"
                        style={{ textDecoration: "none", color: "white" }}
                        to="/CivilConcrete "
                      >
                        {" "}
                        Civil/ Concrete{" "}
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/Services">
                      <NavLink
                        className="nav-link"
                        style={{ textDecoration: "none", color: "white" }}
                        to="/Enginerring_n_Fabrication "
                      >
                        {" "}
                        Engineering{" "}
                        <span className="hidenolargCreeen2">
                          <br />
                        </span>{" "}
                        & Fabrication
                      </NavLink>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/Services">
                      <NavLink
                        className="nav-link"
                        style={{ textDecoration: "none", color: "white" }}
                        to="/CertifiedWelding "
                      >
                        {" "}
                        Certified Welding
                      </NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link>
                    <NavLink className={"RedirectLink"} to="AboutUs">
                      About Us
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink className={"RedirectLink"} to="Saftey">
                      Safety
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink className={"RedirectLink"} to="ContactUs">
                      Contact Us
                    </NavLink>
                  </Nav.Link>

                  <Nav.Link onClick={OpenForm}>
                    <NavLink className={"QuoteBtn"}>Request a Quote</NavLink>
                  </Nav.Link>
                </Nav>

                {/* <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                 
                </Nav> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
