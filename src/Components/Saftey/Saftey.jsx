import React, { useContext } from "react";
import { SliderComponent } from "../CommonComponents/SliderComponent";
import safteyBG from "../../Images/SaftyBG.png";
import saftey from "../../Images/Safty.png";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import "./Saftey.css";
import { MyContext } from "../../Store/Context";
export const Saftey = () => {
  const openForm = useContext(MyContext);

  const OpenForm = () => {
    openForm.SetValue();
  };
  const firstDiv = (
    <div>
         <h1 className="Main_Heading mt-5"> Our Safety </h1>
      <p className=" paragraph ">
        At    <strong>Sahara Steel </strong>, safety is our top priority. We understand the
        importance of providing our clients with peace of mind when it comes to
        the safety of our steel erection services. With our highly trained and
        experienced team, we adhere to strict safety protocols and regulations
        to ensure a secure and accident-free work environment. From thorough
        site inspections to meticulous planning and execution, we prioritise the
        well-being of our workers, clients, and the surrounding community. By
        investing in state-of-the-art safety equipment and continuous training,
        we strive to maintain the highest standards of safety excellence. Trust
        us to deliver exceptional steel erection services without compromising
        on safety, as your satisfaction and the well-being of all stakeholders
        is our ultimate goal.
      </p>
    </div>
  );

  const SecondDiv = (
    <div className="HTHI_Container">
      <img src={saftey} alt="" />
    </div>
  );
  return (
    <div>
      <SliderComponent
        Title="Safety"
        Description="No Shortcuts. No Compromises. Solid Steel Construction Safety."
        bgImg={safteyBG}
      />
      <div className=" container-fluid container-xxl p-1 p-md-5">
        <HalfTextHalfImg firstDiv={firstDiv} lastDiv={SecondDiv} />{" "}
        <h1 className="Main_Heading mt-5"> Our Safety Measures</h1>
        <div
          style={{ gap: "20px" }}
          className=" d-flex flex-wrap justify-content-center SaftyMeasureContainer"
        >
          <div className="SaftyMeasureItems border border-dark p-2 d-flex align-items-center ">
            <img
              src={require("../../Images/item1.png")}
              height={100}
              width={100}
              alt=""
            />
            <p className=" fw-bold text-uppercase ms-4">
              Personal Protective Equipment (PPE)
            </p>
          </div>

          <div className="SaftyMeasureItems border border-dark p-2 d-flex align-items-center ">
            <img
              src={require("../../Images/Item2.png")}
              height={100}
              width={100}
              alt=""
            />
            <p className=" fw-bold text-uppercase ms-4">
              Personal Protective Equipment (PPE)
            </p>
          </div>

          <div className="SaftyMeasureItems border border-dark p-2 d-flex align-items-center ">
            <img
              src={require("../../Images/Item3.png")}
              height={100}
              width={100}
              alt=""
            />
            <p className=" fw-bold text-uppercase ms-4">
              Personal Protective Equipment (PPE)
            </p>
          </div>

          <div className="SaftyMeasureItems border border-dark p-2 d-flex align-items-center ">
            <img
              src={require("../../Images/Item4.png")}
              height={100}
              width={100}
              alt=""
            />
            <p className=" fw-bold text-uppercase ms-4">
              Personal Protective Equipment (PPE)
            </p>
          </div>
          <div className="SaftyMeasureItems border border-dark p-2 d-flex align-items-center ">
            <img
              src={require("../../Images/Item5.png")}
              height={100}
              width={100}
              alt=""
            />
            <p className=" fw-bold text-uppercase ms-4">
              Personal Protective Equipment (PPE)
            </p>
          </div>

          <div className="SaftyMeasureItems border border-dark p-2 d-flex align-items-center ">
            <img
              src={require("../../Images/Item6.png")}
              height={100}
              width={100}
              alt=""
            />
            <p className=" fw-bold text-uppercase ms-4">
              Personal Protective Equipment (PPE)
            </p>
          </div>
        </div>
        <div className="  mt-5">
          <h3 className=" fw-bold">Comprehensive Safety Planning:</h3>
          <p className=" paragraph">
            We prioritise safety by developing thorough safety plans for each
            project, including risk assessments, hazard identification, and
            emergency protocols. Our clients can trust that we have carefully
            evaluated potential risks and implemented effective safety measures
            to protect both our workers and their project.
          </p>

          <h3 className=" fw-bold mt-4">Rigorous Training & Certification:</h3>
          <p className=" paragraph">
            Our team undergoes regular safety training to stay up-to-date with
            the latest industry standards and best practices. We ensure that all
            workers are properly certified and equipped with the knowledge and
            skills necessary to execute the project safely. Clients can have
            peace of mind knowing that our team is highly trained and committed
            to maintaining a safe work environment.
          </p>

          <h3 className=" fw-bold mt-4">Continuous safety Monitoring:</h3>
          <p className=" paragraph">
            We conduct regular safety inspections and audits throughout the
            project to identify any potential safety concerns and address them
            promptly. By maintaining a proactive approach to safety, we
            demonstrate our dedication to ongoing safety improvement and client
            satisfaction. Our clients can be confident that we prioritize their
            project's safety at every stage.
          </p>
        </div>
      </div>
      <div className="Section5">
        <div className="   ContentContainerAboutUs">
          <div className="  container-lg p-5 ">
            {/* <h3 className=" text-start"></h3> */}
            <h3 className="Outline text-light text-start">
              {" "}
              Unleash Your Project's Potential with our Steel!
            </h3>
            <p className=" Outline  text-light paragraph text-start p-0">
              Maximise efficiency and safety on your construction site with our
              professional steel erection services, delivered by a skilled team
              of experts.
            </p>
            <button onClick={OpenForm}>Get a Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
};
