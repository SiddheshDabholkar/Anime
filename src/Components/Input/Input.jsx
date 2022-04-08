import React from "react";
import "./Input.scss";

export default function Input({ onChange, value }) {
  return <input className="Input" onChange={onChange} value={value} />;
}
