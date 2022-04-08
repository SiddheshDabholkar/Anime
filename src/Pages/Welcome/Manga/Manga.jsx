import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import Gradient from "rgt";
import { useNavigate } from "react-router-dom";
import "./Manga.scss";

const data = [
  {
    cover: "/assets/manga/demon.svg",
    title: "Demon slayer",
  },
  {
    cover: "/assets/manga/dress.svg",
    title: "My dress up darling",
  },
  {
    cover: "/assets/manga/jujutsu.svg",
    title: "Jujutsu kaisen",
  },
];

const Slide = React.memo(function (props) {
  const { data, dataIndex } = props;
  const { cover } = data[dataIndex];
  return (
    <div style={{ width: "100%", height: 300, userSelect: "none" }}>
      <img
        alt=""
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          borderRadius: 10,
        }}
        draggable={false}
        src={cover}
      />
    </div>
  );
});

export default function Manga() {
  const navigate = useNavigate();
  const ref = React.useRef();

  return (
    <div className="Manga">
      <div className="MangaTop">
        <Gradient dir="top-to-bottom" from="#f40000" to="#f400d8">
          <h1 className="MangaTopH">Free Manga Reader</h1>
        </Gradient>
        <span className="MangaTopSpan">
          Not everyone has time to slog through 1,000+ episodes.
        </span>
      </div>
      <div style={{ width: "95%", position: "relative" }}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(parentWidth, carouselRef) => {
            let currentVisibleSlide = 5;
            if (parentWidth <= 1440) currentVisibleSlide = 3;
            else if (parentWidth <= 1080) currentVisibleSlide = 1;
            return (
              <StackedCarousel
                ref={carouselRef}
                data={data}
                carouselWidth={parentWidth}
                slideWidth={750}
                slideComponent={Slide}
                maxVisibleSlide={5}
                currentVisibleSlide={currentVisibleSlide}
                useGrabCursor={true}
              />
            );
          }}
        />
      </div>
    </div>
  );
}
