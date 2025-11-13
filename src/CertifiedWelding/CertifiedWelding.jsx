import React, { useContext } from "react";
import { SliderComponent } from "../Components/CommonComponents/SliderComponent";
import BGImg from "../Images/Welding.png";
import { Link } from "react-router-dom";
import { MyContext } from "../Store/Context";

export const CertifiedWelding = () => {
  const openForm = useContext(MyContext);

  const OpenForm = () => {
    openForm.SetValue();
  };
  return (
    <div>
      <SliderComponent Title="Certified Welding" bgImg={BGImg} />
      <div className=" container-fluid container-xxl p-2 p-sm-3 p-md-5">
        <h1 className=" Main_Heading"> Certified Welding</h1>
        {/* <h2 className=" text-center mt-4 fw-bold"> Lorem Ipsum </h2> */}
        <p className=" paragraph text-center">
          At    <strong>Sahara Steel</strong>, your project's integrity is our top priority. Our
          team of certified welders are the backbone of our success, precisely
          creating connections that exceed the industry's most demanding
          standards. Our dedication to quality ensures your project not only
          meets but exceeds expectations.
        </p>

        <div>
          <div className=" row w-100 m-0">
            <div className="col-md-6 col-12 p-2 p-md-4">
              <div>
                <h2 className=" text-start mt-4 fw-bold">Certified Welding </h2>
                <p className=" paragraph text-start">
                  The accurate planning and fabrication are just the first
                  steps. At    <strong>   <strong>Sahara Steel</strong></strong>, our ironworkers using modern and
                  cost-effective rigging techniques and with solid focus on
                  safety, they'll seamlessly assemble your steel masterpiece
                  on-site.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="col-md-6 col-12 p-2 p-2 p-md-4"
            >
              <div className=" text-center w-100">
                <img
                  src={require("../Images/weldingpic2.png")}
                  height={380}
                  width={"80%"}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link className=" text-decoration-none " to="/CivilConcrete">
            <div
              style={{ borderRadius: "15px" }}
              className=" text-center bg-black p-2 p-md-4 mt-3"
            >
              <h4 style={{ color: "#F8BE50" }}>Civil/Concrete</h4>
              <p className=" text-light fw-semibold">
                Have a look at our Civil/Concrete services
              </p>
            </div>
          </Link>

          <Link
            className=" text-decoration-none"
            to="/Enginerring_n_Fabrication"
          >
            <div
              style={{ borderRadius: "15px" }}
              className=" text-center bg-black p-2 p-md-4 mt-3"
            >
              <h4 style={{ color: "#F8BE50" }}>Engineering & Fabrication</h4>
              <p className=" text-light fw-semibold">
                Have a look at our Engineering & Fabrication services
              </p>
            </div>
          </Link>
          {/* <Link className=" text-decoration-none" to="/CertifiedWelding">
            <div
              style={{ borderRadius: "15px" }}
              className=" text-center bg-black p-2 p-md-4 mt-3"
            >
              <h5 style={{ color: "#F8BE50" }}>Other Services</h5>
              <p className=" text-light fw-semibold">
                Have a look at our Certified Welding services
              </p>
            </div>
          </Link> */}
          <Link className=" text-decoration-none" to="/ErectionStructural">
            <div
              style={{ borderRadius: "15px" }}
              className=" text-center bg-black p-2 p-md-4 mt-3"
            >
              <h4 style={{ color: "#F8BE50" }}>Erection of Structural & Miscellaneous</h4>
              <p className=" text-light fw-semibold">
                Have a look at our Erection of Structural & Miscellaneous
                services
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="SectionServicesPages">
        <div className="   ContentContainerAboutUs">
          <div className=" container ">
            <h3 className=" text-center">ARE YOU PLANING YOUR NEXT PROJECT?</h3>

            <p className=" Outline  text-light paragraph text-center p-0">
              Trust    <strong>   <strong>Sahara Steel</strong></strong> for all your steel erection needs, and let us
              bring your vision to life with the strength and reliability of
              steel.
            </p>
            <div className=" text-center">
              {" "}
              <button onClick={OpenForm}>Schedule a Walk Through</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
