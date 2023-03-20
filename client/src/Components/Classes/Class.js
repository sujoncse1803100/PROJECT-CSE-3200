import React from "react";
import { Link, useParams } from "react-router-dom";
import img1 from "../../Image/yoga.png";
import img2 from "../../Image/img2.jpg";
import img3 from "../../Image/img3.jpg";
import img4 from "../../Image/img4.jpg";
import img5 from "../../Image/img5.jpg";
import img6 from "../../Image/img6.jpg";
import { Header } from "../Shared/Header/Header";
import { Footer } from "../Shared/Footer/Footer";
import check from "../../Image/checkmark-square-2.png";

const schedule = [
  {
    day: "Saturday",
    time: "7:00 PM - 8:00 PM",
  },
  {
    day: "Sunday",
    time: "6:00 PM - 7:00 PM",
  },
  {
    day: "Monday",
    time: "3:00 PM - 4:00 PM",
  },
  {
    day: "Tuesday",
    time: "6:00 PM - 7:00 PM",
  },
  {
    day: "Wednessday",
    time: "7:00 PM - 8:00 PM",
  },
  {
    day: "Thirsday",
    time: "5:00 PM - 6:00 PM",
  },
];

const ClassSchedule = ({ item }) => {
  const style = {
    width: "45%",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    border: "none",
  };
  return (
    <div style={style} className=" mt-3 ms-auto">
      <div style={{ border: "none", marginRight: "10px" }} className="card">
        <div className="card-body">
          <h3 className="card-title">{item.day}</h3>
          <p className="card-text text-warning">{item.time}</p>
        </div>
      </div>
    </div>
  );
};

const Details = ({ img }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img style={{ width: "100%", height: "350px" }} src={img} alt="" />
          <p style={{ textAlign: "justify" }} className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            earum ipsum nostrum alias beatae aliquam eveniet in natus cumque
            totam perferendis obcaecati sequi repellat non atque velit
            voluptates asperiores minima quos, explicabo dolorum fuga illo
            officiis! Tempore laborum animi officia explicabo modi iusto,
            voluptatibus voluptas optio excepturi iste tempora cupiditate vel
            sit blanditiis quae dicta quam eos neque in reiciendis alias
            recusandae eaque! Officia dolore assumenda, vel voluptates rem,
            possimus nihil corporis officiis minima perspiciatis iusto ipsam
            sapiente odio incidunt nulla mollitia laborum! Minus iusto,
            aspernatur nostrum officia provident ratione suscipit est dicta vel
            nam adipisci! Rerum sint saepe et.
          </p>
          <div className="mt-3">
            <img style={{ marginRight: "10px" }} src={check} alt="" />
            <b>
              <label htmlFor="">Having Slimmer Shapely Thighs</label>
            </b>
          </div>
          <div className="mt-3">
            <img style={{ marginRight: "10px" }} src={check} alt="" />
            <b>
              <label htmlFor="">Getting Stronger Body</label>
            </b>
          </div>
          <div className="mt-3">
            <img style={{ marginRight: "10px" }} src={check} alt="" />
            <b>
              <label htmlFor="">Increase Metabolism</label>
            </b>
          </div>
          <div className="mt-3">
            <img style={{ marginRight: "10px" }} src={check} alt="" />
            <b>
              <label htmlFor="">Increase Muscular Endurcement</label>
            </b>
          </div>
          <div className="mt-3">
            <img style={{ marginRight: "10px" }} src={check} alt="" />
            <b>
              <label htmlFor="">Maximum Resuts In Less Time</label>
            </b>
          </div>
          <div className="mt-3">
            <img style={{ marginRight: "10px" }} src={check} alt="" />
            <b>
              <label htmlFor="">Firm Tips & Tummy</label>
            </b>
          </div>
        </div>
        <div className="col-md-6 ps-5">
          <h1>
            <span style={{ color: "yellow" }}>CLASS</span> SCHEDULE
          </h1>
          <div className=" d-block justify-content-between">
            <div className="row d-flex">
              {schedule.map((item, index) => (
                <ClassSchedule key={index} item={item} />
              ))}
            </div>
            <div style={{ marginTop: "100%" }} className="text-end">
              <Link to="/pricing">
                <button
                  style={{ width: "150px" }}
                  className="btn btn-warning mt-auto"
                >
                  JOIN US
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Class = () => {
  let img;
  const { title } = useParams();
  if (title === "PHYSIO TRAINING") {
    img = img1;
  } else if (title === "SELF DEFENCE") {
    img = img2;
  } else if (title === "ADVANCE GYM") {
    img = img3;
  } else if (title === "CARDIO TRAINING") {
    img = img4;
  } else if (title === "STRENGTH TRAINING") {
    img = img5;
  } else if (title === "PSYCHO TRAINING") {
    img = img6;
  }

  return (
    <div>
      <Header body={title} />
      <Details img={img} />
      <Footer />
    </div>
  );
};
