import React from "react";
import bodyBuilder from "../../../Image/bodyBuilder.jpg";

export const AboutUs = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6">
          <img
            style={{ height: "400px" }}
            src={bodyBuilder}
            alt=""
            className=" w-100 "
          />
        </div>
        <div className="col-md-6 ps-3">
            <h1 className="text-muted text-center">ABOUT US</h1>
            <h1 className="text-warning">WE ARE HERE TO DREAM !</h1>
            <h1 className="text-dark">OUR TEAM IS HERE TO SURVE YOU</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nisi cupiditate deserunt impedit saepe dolorum enim et assumenda? Laboriosam architecto distinctio eum alias voluptas natus recusandae, necessitatibus repellat quidem porro.</p>
        </div>
      </div>
    </div>
  );
};
