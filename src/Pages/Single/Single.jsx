import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Single.scss";
import { BsFillClockFill } from "react-icons/bs";
import Gradient from "rgt";
import { BiArrowBack } from "react-icons/bi";

export default function Single() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [film, setFilm] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  const fetchFilm = async (id) => {
    try {
      setLoading(true);
      const fetchingFilm = await fetch(
        `https://ghibliapi.herokuapp.com/films/${id}`
      );
      const result = await fetchingFilm.json();
      setFilm(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  React.useEffect(() => {
    fetchFilm(id);
  }, [id]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          color: "silver",
        }}
      >
        <h1>loading...</h1>
      </div>
    );
  }

  const {
    description,
    director,
    image,
    locations,
    movie_banner,
    original_title,
    original_title_romanised,
    people,
    producer,
    release_date,
    rt_score,
    running_time,
    species,
    title,
    url,
    vehicles,
  } = film;
  return (
    <div className="Cont">
      <div className="Single">
        <div className="SingleBack">
          <div className="SingleBackCircle" onClick={() => navigate(-1)}>
            <BiArrowBack className="SingleBackCircleIcon" />
          </div>
        </div>
        <div className="SingleTop">
          <img className="SingleTopBg" alt="background " src={movie_banner} />
          <img className="SingleTopAvatar" alt="movie" src={image} />
        </div>
        <div className="SingleMid">
          <div className="SingleMidTop">
            <div className="SingleMidTopLeft">
              <span className="SingleMidTopLeftItem">
                <b>title :</b>
                {title}
              </span>
              <span className="SingleMidTopLeftItem">
                <b>original title :</b>
                {original_title}
              </span>
              <span className="SingleMidTopLeftItem">
                <b>producer :</b>
                {producer}
              </span>
              <span className="SingleMidTopLeftItem">
                <b>release year :</b>
                {release_date}
              </span>
              <span className="SingleMidTopLeftItem">
                <b>rt score :</b>
                {rt_score}
              </span>
              <span className="SingleMidTopLeftItem">
                <b>director :</b>
                {director}
              </span>
            </div>
            <div className="SingleMidTopRight">
              <Gradient dir="top-to-bottom" from="#ffff00" to="#ff5100">
                <span className="SingleMidTopRightTitle">{title}</span>
              </Gradient>
              <span className="SingleMidTopRightSpan">
                <BsFillClockFill className="SingleMidTopRightSpanIcon" />
                running time: {running_time}
              </span>
              <span className="SingleMidTopRightDesc">{description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
