import React from "react";
import { Link } from "react-router-dom";

export const HeaderMain = () => {
  return (
    <div className="row pb-5">
      <div className="col-md-6 text-white">
        <h1>BEST FITNESS STUDIO IN TOWN</h1>
        <p>
          Welcome to our coummunity. You choose the best gym platform in your
          city
        </p>
        <Link to="/pricing">
          <button style={{ width: "150px" }} className="btn btn-warning mt-5">
            JOIN US
          </button>
        </Link>
      </div>
      <div className="col-md-6 text-center pt-5 ">
        <div className="pt-5">
          <iframe
            width="350"
            height="200"
            className="mt-5"
            src="https://www.youtube.com/embed/wkTFd3QZSP0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
