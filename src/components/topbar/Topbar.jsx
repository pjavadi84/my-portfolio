import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Pouya.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>3104939485</span>
          </div>

          <div className="itemContainer">
            <Mail className="icon" />
            <span>pouya.javadi.resume@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
