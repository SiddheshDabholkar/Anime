import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.scss";

export default function Hero() {
  const navigate = useNavigate();

  const handleSearchAnimeButton = () => {
    navigate("/home");
  };

  return (
    <div className="Hero">
      <div className="HeroTop">
        <h1 className="HeroTopH">Find Anime</h1>
        <h1 className="HeroTopH2">
          All in one place for finding info about your favourite Anime
        </h1>
        <button className="HeroTopButton" onClick={handleSearchAnimeButton}>
          Search Anime
        </button>
      </div>
    </div>
  );
}
