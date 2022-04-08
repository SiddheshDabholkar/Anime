import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <nav className="Header">
      <div className="HeaderLeft">
        <span className="HeaderLeftName">Anime</span>
      </div>
      <div className="HeaderRight">Right</div>
    </nav>
  );
}
