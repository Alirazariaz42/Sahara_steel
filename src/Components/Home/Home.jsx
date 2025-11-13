import React, { useContext, useState } from "react";
import Slider from "react-slick";
import "./Home.css";
import bg1 from "../../Images/bg1.png";
import bg2 from "../../Images/bg2.png";
import { SliderComponent } from "../CommonComponents/SliderComponent";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import { MyContext } from "../../Store/Context";
export const Home = () => {
  const openForm = useContext(MyContext);

  const OpenForm = () => {
    openForm.SetValue();
  };
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#8f8c8cad",
          position: "absolute",
          right: "30px",
          height: "50px",
          width: "50px",
          padding: "15px",
        }}
        onClick={onClick}
      />
    );
  }

  const array = [
    {
      Title: "Building Dreams, steel by steel",
      Description:
        "	Architects of Possibility: Building Dreams, Steel by Steel.",
      BGImg: bg1,
    },
    {
      Title: "solid foundations. strong structures, start your project today!",
      Description:
        "	Architects of Possibility: Building Dreams, Steel by Steel.",
      BGImg: bg2,
    },
  ];

  const firstDiv = (
    <div>
      <h1 className="Main_Heading"> About Sahara Steel</h1>

      <p className=" mt-3 paragraph">
        <strong>Sahara Steel</strong> contracting and construction company
        specializing in steel structures, cladding works, and fireproofing
        works. We are committed to providing our clients with the highest
        quality steel construction solutions. Our team of experts uses modern
        and quality materials and proven methods to deliver exceptional results,
        on time and within budget. We have diverse experience in various steel
        construction projects, from simple to complex. Contact us today for your
        next cost-effective steel project!
        <br />
        <br />
        <strong className=" mt-4">
          {" "}
          Elevate Your Construction Projects With Our Steel.
        </strong>
      </p>

      <div className=" text-center">
        <button onClick={OpenForm} className="Common_ContactBtn">
          {" "}
          Request a Quote
        </button>
      </div>
    </div>
  );
  const SecondDiv = (
    <div className="HTHI_Container">
      <img src={require("../../Images/HTHIpic1.png")} alt="" />
    </div>
  );
  const [ServicesDes, setServicesDes] = useState(
    `As a leading provider of construction steel services, we specialise in the expert erection of both structural and miscellaneous steel. Our highly skilled team of professionals combines years of experience with a deep understanding of industry standards to ensure the seamless and efficient installation of steel structures. Whether it's a large-scale commercial project or a smaller residential development, we pride ourselves on delivering superior craftsmanship, timely completion, and exceptional attention to detail.`
  );
  const SecondDiv2 = (
    <div className="HTHI_Container text-center">
      <img src={require("../../Images/HTHIPic2.png")} alt="" />
    </div>
  );
  const firstDiv2 = (
    <div>
      <h1 className="Main_Heading"> Our Services</h1>

      <p className=" mt-3 paragraph">
        We offer bespoke solutions to fit your project's unique requirements and
        budget:
        <br />• Design & Fabrication: From concept to creation, our engineers
        and fabricators ensure high-quality, functional steel structures.
        <br />• Erection & Expertise: Experienced crews deliver safe, efficient
        on-site assembly with cladding and fireproofing options.
        <br />• Long-Term Support: We offer maintenance plans to guarantee your
        steel structure's lasting performance.
      </p>

      <div className=" ">
        <button onClick={OpenForm} className="Common_ContactBtn">
          {" "}
          Request a Quote
        </button>
      </div>
    </div>
  );
  return (
    <div>
      <div className=" mt-0  ">
        <Slider {...settings}>
          {array.map((item) => (
            <div className=" w-100">
              <SliderComponent
                Title={item.Title}
                Description={item.Description}
                bgImg={item.BGImg}
              />
            </div>
          ))}
        </Slider>

        <div className=" container-fluid container-xxl p-2 p-sm-3 p-md-5">
          <HalfTextHalfImg firstDiv={firstDiv} lastDiv={SecondDiv} />
          <div className=" mt-5 mb-5">
            <div
              style={{ gap: "20px" }}
              className=" d-flex flex-md-row flex-column justify-content-center  "
            >
              <div className=" p-3 p-lg-5  border border-dark">
                <h2 color="text-dark">Safety</h2>
                <p className=" paragraph ">
                  {" "}
                  <strong>Sahara Steel</strong> provides a safe work environment
                  for our employees and subcontractors. We provide regular
                  safety training, site-specific safety plans, Ongoing safety
                  inspections and more!
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <br />
                  <strong>Your Safety is Our Priority!</strong>
                </p>
              </div>
              <div className="  p-3 p-lg-5  border border-dark">
                {" "}
                <h1 color="text-dark">Reliability</h1>
                <p className=" paragraph ">
                  {" "}
                  Experience the Sahara difference: where quality meets
                  dependability We understand the importance of structures you
                  can trust. Our proven record and careful processes ensure your
                  steel project is built to the highest standards for enduring
                  reliability.
                </p>
              </div>
            </div>
          </div>

          <HalfTextHalfImg firstDiv={SecondDiv2} lastDiv={firstDiv2} />

          <div className=" mt-4 mb-4 p-2">
            <h2 className=" Main_Heading">Explore Our Main Services</h2>
          </div>
          <div className=" mainServicesContainer">
            <div className="mainServiceItem ">
              <div
                onMouseEnter={() =>
                  setServicesDes(
                    `As a leading provider of construction steel services, we specialise in the expert erection of both structural and miscellaneous steel. Our highly skilled team of professionals combines years of experience with a deep understanding of industry standards to ensure the seamless and efficient installation of steel structures. Whether it's a large-scale commercial project or a smaller residential development, we pride ourselves on delivering superior craftsmanship, timely completion, and exceptional attention to detail.`
                  )
                }
                className="mainServicesNames"
              >
                <ul className=" m-0">
                  <li>Erection of Structural & Miscellaneous Steel</li>
                </ul>
              </div>
              <div
                onMouseEnter={() =>
                  setServicesDes(
                    <>
                      {" "}
                      While steel is our specialty, we understand the importance
                      of a strong foundation. Sahara offers comprehensive civil
                      and concrete services to seamlessly integrate with your
                      steel structure. This can include:
                      <ul>
                        <li> Foundation construction </li>
                        <li> Slab & footing installation </li>
                        <li> Concrete walls & beams </li>
                        <li> Sitework & excavation </li>
                      </ul>
                    </>
                  )
                }
                className="mainServicesNames"
              >
                <ul className=" m-0">
                  <li>Civil/Concrete</li>
                </ul>
              </div>
              <div
                onMouseEnter={() =>
                  setServicesDes(
                    <>
                      Our in-house team seamlessly blends expert engineering
                      with precision fabrication. We transform your vision into
                      reality, ensuring:
                      <ul>
                        <li>
                          {" "}
                          Accurate & Efficient Designs: Optimized for strength,
                          safety, and cost-effectiveness.{" "}
                        </li>
                        <li>
                          {" "}
                          High-Quality Fabrication: Utilizing advanced
                          technology and strict quality control.{" "}
                        </li>
                        <li>
                          {" "}
                          Seamless Transition: Streamlined workflow from concept
                          to construction-ready steel.{" "}
                        </li>
                      </ul>
                    </>
                  )
                }
                className="mainServicesNames"
              >
                <ul className=" m-0">
                  <li>Engineering & Fabrication</li>
                </ul>
              </div>
              <div
                onMouseEnter={() =>
                  setServicesDes(
                    <>
                      Certified Welders. Guaranteed Strength. Our team of
                      certified welders ensures every connection in your steel
                      structure surpasses the industry's highest standards.
                      Experience the confidence that comes with welds you can
                      trust.
                    </>
                  )
                }
                className="mainServicesNames"
              >
                <ul className=" m-0">
                  <li>Certified Welding</li>
                </ul>
              </div>
            </div>
            <div className="mainServiceItem ">
              <div className=" descriptionContainer">
                <h2 className=" fw-semibold">↦ Services</h2>
                <p className=" paragraph">{ServicesDes}</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" whyChooseSteel   ">
          <div className="whyChooseSteelImg">
            {" "}
            <img src={require("../../Images/dummy.png")} alt="" />
          </div>
          <div className=" whyChooseSteelDescription">
            <div className="Benifits">
              <h3 className="Benifitstext">
                {" "}
                Benefits Of Working With{" "}
                <strong>
                  {" "}
                  <strong>sahara steel</strong>
                </strong>{" "}
              </h3>
            </div>
            <div className=" benifitsContainer ">
              <ul>
                <li> Diverse building expertise</li>
                <li>Partnership with top suppliers</li>
                <li>Professional and reliable services</li>
                <li>Quality assurance</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" container-fluid container-xxl p-2 p-sm-3 p-md-5">
          <div className=" row w-100 mt-4 m-0">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="col-md-6 col-12"
            >
              <div className=" border border-dark p-md-4 p-3">
                <h2 className=" fw-bold"> Our Vission</h2>
                <p className=" paragraph">
                  At <strong>Sahara Steel</strong>, our vision is to be the
                  go-to construction steel services provider, known for our
                  unwavering commitment to quality and customer satisfaction.
                  With our expertise and dedication, we aim to build a solid
                  foundation for your projects, ensuring strength, durability,
                  and success.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="col-md-6 col-12"
            >
              <div className=" text-center mt-md-0 mt-3">
                <img
                  src={require("../../Images/OurVission.png")}
                  height={270}
                  width={"100%"}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="Section4">
          <div className="   ContentContainerAboutUs">
            <div className="  container-lg p-5 ">
              <h3 className=" text-start">Ready To Pull The Trigger?</h3>
              <h3 className=" text-start"> Get a quote today.</h3>
              <p className=" Outline  text-light paragraph text-start p-0">
                Maximise efficiency and safety on your construction site with
                our professional steel erection services, delivered by our
                skilled team of experts.
              </p>
              <button onClick={OpenForm}>Get a Quote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
