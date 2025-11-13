import React, { Component } from "react";
import Slider from "react-slick";
import Experties1 from "../../Images/Experties1.png";
import "./CommonStyle.css";
import { Link } from "react-router-dom";
export const OurExperties = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          padding: "10px",
          borderRadius: "50%",
          height: "40px",
          width: "40px",
          zIndex: "1",
        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };

  return (
    <div>
      {" "}
      <div className="">
        <Slider {...settings}>
          <div>
            <div className=" row w-100 m-0">
              <div className=" col-md-6 col-sm-12 col-12">
                <div>
                  <div className=" mb-3">
                    <h2 className="ExpertiesHeading">
                      Erection of Structural Steel
                    </h2>
                  </div>
                  <div className="ExpertiesDescription  border border-dark p-2 p-sm-4 p-md-5">
                    <p className=" text-dark paragraph">
                      The careful planning and fabrication of your steel
                      structure is just the beginning. At Sahara Steel, our
                      skilled ironworkers and erection crews ensure the flawless
                      assembly of your project on-site.
                    </p>
                    <Link to="/ErectionStructural">
                      {" "}
                      <button className=" Common_ContactBtn">Learn More</button>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
                className="  col-md-6 col-sm-12 col-12 "
              >
                <div className=" w-100 text-center ">
                  {" "}
                  <p>
                    {" "}
                    <img
                      src={Experties1}
                      className=" "
                      alt=""
                      height={385}
                      width={"100%"}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" row w-100 m-0">
              <div className=" col-md-6 col-sm-12 col-12">
                <div>
                  <div className=" mb-3">
                    <h2 className="ExpertiesHeading">Certified Welding</h2>
                  </div>
                  <div className="ExpertiesDescription  border border-dark p-2 p-sm-4 p-md-5">
                    <p className=" text-dark paragraph">
                      Certified Welders. Guaranteed Strength. Our team of
                      certified welders ensures every connection in your steel
                      structure surpasses the industry's highest standards.
                      Experience the confidence that comes with welds you can
                      trust.
                    </p>
                    <Link to="/CertifiedWelding">
                      {" "}
                      <button className=" Common_ContactBtn">Learn More</button>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
                className="  col-md-6 col-sm-12 col-12 "
              >
                <div className=" w-100">
                  {" "}
                  <img
                    src={require("../../Images/Experties2.png")}
                    alt=""
                    height={385}
                    width={"100%"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" row w-100 m-0">
              <div className=" col-md-6 col-sm-12 col-12">
                <div>
                  <div className=" mb-3">
                    <h2 className="ExpertiesHeading">
                      Engineering & Fabrication
                    </h2>
                  </div>
                  <div className="ExpertiesDescription  border border-dark p-2 p-sm-4 p-md-5">
                    <p className=" text-dark paragraph">
                      Our in-house team seamlessly blends expert engineering
                      with precision fabrication. We transform your vision into
                      reality, Our in-house team seamlessly blends expert
                      engineering with precision fabrication. We transform your
                      vision into reality
                    </p>
                    <Link to="/Enginerring_n_Fabrication">
                      {" "}
                      <button className=" Common_ContactBtn">Learn More</button>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
                className="  col-md-6 col-sm-12 col-12 "
              >
                <div className=" w-100">
                  {" "}
                  <img
                    src={require("../../Images/Experties3.png")}
                    alt=""
                    height={385}
                    width={"100%"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" row w-100 m-0">
              <div className=" col-md-6 col-sm-12 col-12">
                <div>
                  <div className=" mb-3">
                    <h2 className="ExpertiesHeading">Civil/Concrete</h2>
                  </div>
                  <div className="ExpertiesDescription  border border-dark p-2 p-sm-4 p-md-5">
                    <p className=" text-dark paragraph">
                      We are your trusted partner for all your civil and
                      concrete construction needs. Our team of skilled
                      professionals uses modern, cost-effective technology and
                      top-quality materials to deliver exceptional results.{" "}
                    </p>
                    <Link to="/CivilConcrete">
                      {" "}
                      <button className=" Common_ContactBtn">Learn More</button>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
                className="  col-md-6 col-sm-12 col-12 "
              >
                <div className=" w-100">
                  {" "}
                  <img
                    src={require("../../Images/Experties4.png")}
                    alt=""
                    height={385}
                    width={"100%"}
                  />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
