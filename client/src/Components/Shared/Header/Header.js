import React from "react";
import headerBg from "../../../Image/headerbg.jpg";
import { NavBar } from "../NavBar/NavBar";
import "./Header.css";

const HeaderMain = ({ body }) => {
  return (
    <div className="text-center text-white">
      <h1> {body} </h1>
    </div>
  );
};

export const Header = ({body}) => {
  return (
    <div
      className=" sherdeHeader pt-5"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${headerBg})`,
      }}
    >
      <div className="container">
        <NavBar />
        <HeaderMain body={body} />
      </div>
    </div>
  );
};
