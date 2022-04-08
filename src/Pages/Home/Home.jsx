import React from "react";
import "./Home.scss";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

export default function Home() {
  return (
    <div className="Home">
      <div className="HomeTop">
        <Input />
        <Button />
      </div>
    </div>
  );
}
