import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="Footer">
      <span className="FooterName">
        &copy; {new Date().getFullYear()} all rights reserved
      </span>
    </footer>
  );
}
