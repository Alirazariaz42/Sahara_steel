import React, { useContext } from "react";

import "./CommonStyle.css";
import { MyContext } from "../../Store/Context";
export const SliderComponent = (props) => {
  const openForm = useContext(MyContext);

  const OpenForm = () => {
    openForm.SetValue();
  };

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${props.bgImg})`, padding: "0px" }}
        className="slider-container"
      >
        <div className=" contentContainer">
          <div className=" text-center outerContentContainer ">
            <h3 className="  text-uppercase ">{props.Title}</h3>
            <p className=" fs-5">{props.Description}</p>
            <button onClick={OpenForm} className="  fw-semibold">
              {" "}
              Get in touch{" "}
            </button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
