import React from "react";
import "./Hero.scss";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="HeroTop">
        <h1 className="HeroTopH">Find Anime</h1>
        <h1 className="HeroTopH2">
          All in one place for finding info about your favourite Anime
        </h1>
        <button className="HeroTopButton">Search Anime</button>
      </div>
    </div>
  );
}
