import React from "react";
import "../Header/Header.css";
import image1 from "../../../Image/Group 80.png";
import image2 from "../../../Image/Group 81.png";
import image3 from "../../../Image/Group 82.png";
import bg1 from "../../../Image/bg1.jpg";

const Details = ({ data }) => {
  return (
    <div className="col-md-4 mt-3">
      <div
        className="card header text-white"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bg1})`,
        }}
      >
        <div className="text-center">
          <img
            src={data.icon}
            style={{ width: "50px",height:'50px' }}
            alt=""
            className="card-image-top mt-5"
          />
        </div>
        <div className="card-body text-center">
          <h1 style={{color:`${data.color}`}} className="card-text">{data.title}</h1>
          <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            harum officiis molestias at, quas aliquid dolorum exercitationem
            nesciunt provident voluptatem?
          </p>
        </div>
      </div>
    </div>
  );
};

export const HealthTip = () => {
  return (
    <div className="container mt-5 mb-5 p-3">
      <div className="row  d-flex justify-content-center">
        {[
          {
            icon: image1,
            bg: bg1,
            title: "PROGRESSION",
            color:''
          },
          {
            icon: image2,
            bg: bg1,
            title: "WORKOUT",
            color:'yellow'
          },
          {
            icon: image3,
            bg: bg1,
            title: "NUTRITION",
            color:''
          },
        ].map((data, index) => (
          <Details data={data} key={index} />
        ))}
      </div>
    </div>
  );
};
