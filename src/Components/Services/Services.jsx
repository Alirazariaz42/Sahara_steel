import { SliderComponent } from "../CommonComponents/SliderComponent";
import "./Services.css";
import ServicesBg from "../../Images/ServicesBg.png";
import Slider from "react-slick";
import { OurExperties } from "../CommonComponents/OurExperties";
import { useContext } from "react";
import { MyContext } from "../../Store/Context";
export const Services = () => {
  const openForm = useContext(MyContext);

  const OpenForm = () => {
    openForm.SetValue();
  };
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
          zIndex: "4",
        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 206000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div>
      <SliderComponent
        Title={<>Services</>}
        Description={
          <>
            We offer bespoke solutions to fit your project's unique requirements
            and budget.
          </>
        }
        bgImg={ServicesBg}
      />
      <div className=" container-fluid container-xxl p-2 p-sm-3 p-md-5 ">
        <p className=" paragraph">
          From small-scale projects to large-scale developments, our
          construction steel erection services guarantee timely completion and
          exceptional quality.From small-scale projects to large-scale
          developments, our construction steel erection services guarantee
          timely completion and exceptional quality.
        </p>
        <h1 className=" Main_Heading"> Our Expertise</h1>
        <div className=" mt-5 mb-5">
          <OurExperties />
        </div>
        <div>
          <h1 className=" Main_Heading mt-4 mb-4"> Additional Services</h1>
          <div className="slider-container p-1 ">
            <Slider {...settings}>
              <div className="demo">
                <img src={require("../../Images/1pix.png")} alt="" />
                <button>Heavy Rigging</button>
              </div>
              <div className="demo">
                <img src={require("../../Images/2.pix.png")} alt="" />
                <button>Material Handling</button>
              </div>
              <div className="demo">
                <img src={require("../../Images/3pix.png")} alt="" />
                <button>Machine Installation</button>
              </div>
              <div className="demo">
                <img src={require("../../Images/4pix.png")} alt="" />
                <button>Industrial Construction</button>
              </div>
            </Slider>
          </div>
          <div></div>
        </div>
      </div>

      <div className="Section3">
        <div className="   ContentContainerAboutUs">
          <div className=" container-lg p-5 ">
            <h3 className=" text-start">
              Build a better tomorrow with <strong>sahara steel</strong>
            </h3>
            <h3 className="Outline text-light text-start">
              {" "}
              Solid Foundations, Sturdy Future.
            </h3>
            <p className=" Outline  text-light paragraph text-start p-0">
              Experience the power of our steel services – where resilience
              meets adaptability, delivering quotes that reflect the speed and
              efficiency your project demands."
            </p>
            <button onClick={OpenForm}>Get a Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
};
