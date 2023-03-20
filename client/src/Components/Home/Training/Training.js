import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import yoga from "../../../Image/yoga.png";
import cardio from "../../../Image/cardio.jpg";

export const Training = () => {
  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center mb-5">
        TRAINING <span className="text-warning">PROGRAMS</span>
      </h1>
      <div className="row">
        <div style={{height:'400px'}} className="col-md-6">
          <img style={{ height: "100%",width:'100%' }} src={yoga} alt="" />
          <button
            style={{ position: "relative", zIndex: "1", marginTop: "-200px" }}
            className="btn p-3 btn-warning"
          >
            <b>YOGA TRAINING SESSIION</b>
            <FontAwesomeIcon
              style={{ marginLeft: "20px" }}
              icon={faArrowRight}
            />
          </button>
        </div>
        <div  style={{height:'400px'}} className="col-md-6">
          <img style={{ height: "100%",width:'100%' }} src={cardio} alt="" />
          <button
            style={{ position: "relative", zIndex: "1", marginTop: "-200px" }}
            className="btn  p-3 btn-warning"
          >
            <b>CARDIO TRAINING SESSIION</b>
            <FontAwesomeIcon
              style={{ marginLeft: "20px" }}
              icon={faArrowRight}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
