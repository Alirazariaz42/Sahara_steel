import React from "react";
import "./CommonStyle.css";

export const HalfTextHalfImg = (props) => {
  return (
    <div>
      <div className=" row  m-0 w-100">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="col-md-6 col-12"
        >
          {props.firstDiv}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="col-md-6 col-12 "
        >
          {props.lastDiv}
        </div>
      </div>
    </div>
  );
};
