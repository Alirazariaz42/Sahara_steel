import React, { useContext } from "react";
import { SliderComponent } from "../Components/CommonComponents/SliderComponent";
import BGImg from "../Images/Engineering&Fabrication.png";
import { Link } from "react-router-dom";
import { MyContext } from "../Store/Context";

export const Enginerring_n_Fabrication = () => {
  const openForm = useContext(MyContext);

  const OpenForm = () => {
    openForm.SetValue();
  };
  return (
    <div>
      <SliderComponent Title="Engineering & Fabrication" bgImg={BGImg} />
      <div className=" container-fluid container-xxl p-2 p-sm-3 p-md-5">
        <h1 className=" Main_Heading"> Engineering & Fabrication</h1>
        {/* <h2 className=" text-center mt-4 fw-bold"> Lorem Ipsum </h2> */}
        <p className=" paragraph text-center">
          <strong>Sahara Steel </strong> effortlessly combines expert
          engineering with precision fabrication to bring your vision to life.
          We deliver optimized steel solutions by designing structures that are
          strong, safe, and cost-effective. We use advanced technology and
          strict quality control to ensure every piece is perfect.
        </p>

        <div>
          <div className=" row w-100 m-0">
            <div className="col-md-6 col-12 p-2 p-md-4">
              <div>
                <h2 className=" text-start mt-4 fw-bold">
                  {" "}
                  Engineering & Fabrication{" "}
                </h2>
                <p className=" paragraph text-start">
                  Ready to build? Get a seamless steel solution from Sahara
                  Steel. From concept to construction-ready steel, we handle it
                  all with ease and ensure a streamlined process.
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
                  src={require("../Images/enginering&fabricationpic2.png")}
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

          {/* <Link
            className=" text-decoration-none"
            to="/Enginerring_n_Fabrication"
          >
            <div
              style={{ borderRadius: "15px" }}
              className=" text-center bg-black p-2 p-md-4 mt-3"
            >
              <h5 style={{ color: "#F8BE50" }}>Other Services</h5>
              <p className=" text-light fw-semibold">
                Have a look at our Engineering & Fabrication services
              </p>
            </div>
          </Link> */}
          <Link className=" text-decoration-none" to="/CertifiedWelding">
            <div
              style={{ borderRadius: "15px" }}
              className=" text-center bg-black p-2 p-md-4 mt-3"
            >
              <h4 style={{ color: "#F8BE50" }}>Certified Welding</h4>
              <p className=" text-light fw-semibold">
                Have a look at our Certified Welding services
              </p>
            </div>
          </Link>
          <Link className=" text-decoration-none" to="/ErectionStructural">
            <div
              style={{ borderRadius: "15px" }}
              className=" text-center bg-black p-2 p-md-4 mt-3"
            >
              <h4 style={{ color: "#F8BE50" }}>
                Erection of Structural & Miscellaneous
              </h4>
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
              Trust <strong>Sahara Steel </strong> for all your steel erection
              needs, and let us bring your vision to life with the strength and
              reliability of steel.
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
