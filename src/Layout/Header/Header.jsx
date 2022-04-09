import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
// import { BsFillVolumeDownFill, BsSunFill } from "react-icons/bs";

export default function Header() {
  return (
    <nav className="Header">
      <div className="HeaderLeft">
        <Link to="/">
          <span className="HeaderLeftName">Find Anime</span>
        </Link>
      </div>
      {/* <div className="HeaderRight">
        <BsFillVolumeDownFill className="icons" />
        <BsSunFill className="icons" />
      </div> */}
    </nav>
  );
}
