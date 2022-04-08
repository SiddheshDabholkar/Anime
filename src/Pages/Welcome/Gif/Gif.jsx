import React from "react";
import Gradient from "rgt";
import "./Gif.scss";

export default function Gif() {
  return (
    <div className="Gif">
      <div className="GifLeft">
        <div className="GifLeftCont">
          <Gradient dir="top-to-bottom" from="#322eb5" to="#55D4FF">
            <h1 className="GifLeftContH">Watch Your Favourite Anime</h1>
          </Gradient>
          <span className="GifLeftContS">
            Gone are the days when you spent hours searching for a website to
            watch your favorite anime
          </span>
          <div className="GifLeftContB">
            <button className="GifLeftContBStyle">Watch Now</button>
          </div>
        </div>
      </div>
      <div className="GifRight">
        <img
          className="GifRightImg"
          src="/assets/videos/zenitsu.gif"
          alt="loading.."
        />
      </div>
    </div>
  );
}
