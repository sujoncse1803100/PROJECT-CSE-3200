import React from "react";
import { Footer } from "../Shared/Footer/Footer";
import { Header } from "../Shared/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../Image/yoga.png";
import img2 from "../../Image/img2.jpg";
import img3 from "../../Image/img3.jpg";
import img4 from "../../Image/img4.jpg";
import img5 from "../../Image/img5.jpg";
import img6 from "../../Image/img6.jpg";
import { Link } from "react-router-dom";


const Class = ({ data }) => {

  

  return (
    <div style={{ height: "300px" }} className="col-md-4 mt-5">
      <img style={{ height: "100%", width: "100%" }} src={data.image} alt="" />
      <Link to={`/class/${data.title}`}>
        <button
          style={{
            position: "relative",
            zIndex: "1",
            marginLeft: "10px",
            marginTop: "-50px",
          }}
          className="btn p-3 btn-warning"
        >
          <b>{data.title}</b>
          <FontAwesomeIcon style={{ marginLeft: "20px" }} icon={faArrowRight} />
        </button>
      </Link>
    </div>
  );
};

export const Classes = () => {
  const datas = [
    {
      image: img1,
      title: "PHYSIO TRAINING",
    },
    {
      image: img2,
      title: "SELF DEFENCE",
    },
    {
      image: img3,
      title: "ADVANCE GYM",
    },
    {
      image: img4,
      title: "CARDIO TRAINING",
    },
    {
      image: img5,
      title: "STRENGTH TRAINING",
    },
    {
      image: img6,
      title: "PSYCHO TRAINING",
    },
  ];
  return (
    <div>
      <Header body="OUR CLASSES" />
      <div className="container">
        <div className="row ">
          {datas.map((data, index) => (
            <Class key={index} data={data} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
