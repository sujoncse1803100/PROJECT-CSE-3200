import React from "react";
import "./Header.css";
import { NavBar } from "../../Shared/NavBar/NavBar";
import { HeaderMain } from "./HeaderMaain/HeaderMain";
import header from "../../../Image/headerbg.jpg";

export const Header = () => {
  return (
    <div
      className="header pt-5 "
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})`,
      }}
    >
      <div className="container">
        <NavBar />
        <HeaderMain />
      </div>
    </div>
  );
};
