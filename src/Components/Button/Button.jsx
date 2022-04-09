import React from "react";
import { FiSearch } from "react-icons/fi";
import "./Button.scss";

export default function Button({ onClick }) {
  return (
    <button className="SearchButton" onClick={onClick}>
      <FiSearch />
    </button>
  );
}
