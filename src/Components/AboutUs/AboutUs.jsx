import React, { useContext } from "react";
import "./AboutUs.css";
import { SliderComponent } from "../CommonComponents/SliderComponent";
import BGImg from "../../Images/bg3.png";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import AboutCompanyPic from "../../Images/AboutCompanyPic.png";
import { MyContext } from "../../Store/Context";
// import  '../CommonComponents/CommonStyle.css';
export const AboutUs = () => {
  const firstDiv = (
    <div>
      <h1 className="Main_Heading"> About Company</h1>

      <p className=" mt-3 paragraph">
        Welcome to <strong>Sahara Steel</strong>, your premier provider of
        structural steel erection services. With years of experience in the
        industry, we specialise in offering a wide range of comprehensive
        solutions for all your steel erection needs. From large-scale commercial
        projects to smaller residential structures, our team of skilled and
        certified professionals is dedicated to delivering top-quality results.
        Our main services include steel fabrication, welding, rigging, and
        installation, ensuring that every project is completed efficiently and
        to the highest standards. At <strong>Sahara Steel</strong>, we pride
        ourselves on our commitment to safety, innovation, and customer
        satisfaction. Trust us to bring your vision to life with precision and
        excellence.
      </p>

      {/* <div className=" text-center">
        <button className="Common_ContactBtn"> Request a Quote</button>
      </div> */}
    </div>
  );
  const SecondDiv = (
    <div className="HTHI_Container">
      <img src={AboutCompanyPic} alt="" />
    </div>
  );
  const openForm = useContext(MyContext);

  const OpenForm = () => {
    openForm.SetValue();
  };
  return (
    <div>
      <SliderComponent
        Title="About Company"
        Description={
          <>
            Your Partner in Steel Excellence: Meet <strong>Sahara Steel</strong>{" "}
            team.
          </>
        }
        bgImg={BGImg}
      />
      <div className=" container-fluid container-xxl p-1 p-md-5">
        <HalfTextHalfImg firstDiv={firstDiv} lastDiv={SecondDiv} />{" "}
        <div className=" mt-4 p-md-5 p-3 text-center border border-dark">
          <h2 style={{ color: "black" }} className=" text-uppercase">
            Building Dreams, One Beam at a Time!
          </h2>
          <p className=" paragraph ">
            We pride ourselves on delivering outstanding quality and design
            completion for leading clients across country. Contact us for a
            quick quote based on your project’s scope.
          </p>
          <button onClick={OpenForm} className=" Common_ContactBtn">
            Contact us
          </button>
        </div>
        <div
          style={{ gap: "20px" }}
          className=" d-flex flex-md-row flex-column justify-content-center  mt-5 w-100"
        >
          <div style={{ backgroundColor: "gray" }} className="p-4  w-100">
            <p className="text-center paragraph text-dark ">
              Clients <strong> 250+</strong>
            </p>
          </div>
          <div style={{ backgroundColor: "gray" }} className="p-4  w-100">
            {" "}
            <p className=" text-center paragraph text-dark ">
              Projects <strong> 150+</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="Section3">
        <div className="ContentContainerAboutUs">
          <h3>
            Build a better tomorrow with <strong>Sahara Steel</strong>
          </h3>
          <button onClick={OpenForm}>Get a Quote</button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
