import React from "react";
import image1 from "../../../Image/gift-2.png";
import image2 from "../../../Image/Group 87.png";
import image3 from "../../../Image/Group 88.png";

const Details = ({ data }) => {
  return (
    <div className="col-md-4 mt-3">
      <div
        className="card"
      >
        <div className="text-center">
          <img
            src={data.icon}
            style={{ width: "50px", height: "50px" }}
            alt=""
            className="card-image-top mt-5"
          />
        </div>
        <div className="card-body text-center">
          <h5 style={{ color: `${data.color}` }} className="card-text">
            {data.title}
          </h5>
          <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            harum officiis molestias at.
          </p>
        </div>
      </div>
    </div>
  );
};

export const Choose = () => {
  return (
    <div className="container mb-5">
      <h1 className="text-center mb-5">
        <span className="text-warning">WHY</span> CHOOSE US
      </h1>

      <div className="row  d-flex justify-content-center">
        {[
          {
            icon: image1,
            title: "FREE FITNESS TRAINING",
            color: "",
          },
          {
            icon: image2,
            title: "TONS OF CARDIO & STRENGTH",
            color: "",
          },
          {
            icon: image3,
            title: "NO COMMITMENT MEMBERSHIP",
            color: "",
          },
        ].map((data, index) => (
          <Details data={data} key={index} />
        ))}
      </div>
    </div>
  );
};
