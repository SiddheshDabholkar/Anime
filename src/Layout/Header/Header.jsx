import React from "react";
import "./Header.scss";
// import { BsFillVolumeDownFill, BsSunFill } from "react-icons/bs";

export default function Header() {
  return (
    <nav className="Header">
      <div className="HeaderLeft">
        <span className="HeaderLeftName">Find Anime</span>
      </div>
      {/* <div className="HeaderRight">
        <BsFillVolumeDownFill className="icons" />
        <BsSunFill className="icons" />
      </div> */}
    </nav>
  );
}
