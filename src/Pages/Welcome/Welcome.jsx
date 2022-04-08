import React from "react";
import Gif from "./Gif/Gif";
import Hero from "./Hero/Hero";
import Manga from "./Manga/Manga";
import "./Welcome.scss";

export default function Welcome() {
  return (
    <div className="Welcome">
      <Hero />
      <Manga />
      <Gif />
    </div>
  );
}
