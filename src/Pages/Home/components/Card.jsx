import React from "react";
import "./Card.scss";
import { motion } from "framer-motion";
import Gradient from "rgt";
import { useNavigate } from "react-router-dom";

export default function Card({ data }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    setTimeout(() => {
      navigate(`/home/${data.id}`);
    }, 250);
  };

  const {
    description,
    director,
    id,
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
  } = data;
  return (
    <motion.div
      className="Card"
      whileTap={{ scale: 0.95 }}
      onClick={handleCardClick}
    >
      <img alt="" src={image} className="CardImage" />
      {/* <motion.div className="CardOverlay">
        <Gradient dir="top-to-bottom" from="#ffff00" to="#ff5100">
          <h1 className="CardOverlayHead">{title}</h1>
        </Gradient>
        <span className="CardOverlayDesc">{description}</span>
      </motion.div> */}
    </motion.div>
  );
}
