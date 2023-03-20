import React from "react";
import { Footer } from "../Shared/Footer/Footer";
import { Header } from "../Shared/Header/Header";
import basic from "../../Image/bg1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const datas = [
  {
    image: basic,
    price: "$140",
    title: "ADVANCE PLAN",
  },
  {
    image: basic,
    price: "$120",
    title: "BASIC PLAN",
  },
  {
    image: basic,
    price: "$90",
    title: "BEGGINERS PLAN",
  },
];

const Puschese = ({ data }) => {
  return (
    <div
      className="text-center me-2 pt-5 pb-5  text-white col-md-3 mt-3"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${basic})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <b className="text-warning mt-5">BILLED MONTHLY</b>
      <h3>{data.title}</h3>
      <h1 className="text-warning">{data.price}</h1>
      <div
        style={{ width: "90%", margin: "0 auto" }}
        className="text-start ps-4"
      >
        <p className="mt-3">
          <FontAwesomeIcon icon={faCheck} />
          <label htmlFor="" className="ms-3">
            Mobile-Optimized
          </label>
        </p>
        <p>
          <FontAwesomeIcon icon={faCheck} />
          <label htmlFor="" className="ms-3">
            Best Hosting
          </label>
        </p>
        <p>
          <FontAwesomeIcon icon={faCheck} />
          <label htmlFor="" className="ms-3">
            free Custom
          </label>
        </p>
        <p>
          <FontAwesomeIcon icon={faCheck} />
          <label htmlFor="" className="ms-3">
            Outstanding
          </label>
        </p>
        <p>
          <FontAwesomeIcon icon={faCheck} />
          <label htmlFor="" className="ms-3">
            Happy Customers
          </label>
        </p>
      </div>
      <Link to="/membership">
        <button style={{ width: "150px" }} className="btn btn-warning mt-3">
          PURCHASE
        </button>
      </Link>
    </div>
  );
};

const Details = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="text-center">
          <span className="text-warning">CHOOSE THE OFFER </span>
          THAT SUITS YOU
        </h1>
        <div className="text-center mt-4">
          <span className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, omnis.
          </span>
          <br />
          <span className="text-center">
            Lorem ipsum dolor sit amet consectetur.
          </span>
        </div>
      </div>

      <div className="row d-flex justify-content-center text-center mt-5">
        {datas.map((data, index) => (
          <Puschese key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export const Pricing = () => {
  return (
    <div>
      <Header body="PRICING PLANS" />
      <Details />
      <Footer />
    </div>
  );
};
