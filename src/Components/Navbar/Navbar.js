import { Facebook, LinkedIn, Mail, Person, WhatsApp } from "@material-ui/icons";
import React from "react";
import "../Navbar/navbar.scss";
function Navbar({ menuOpen, setMenuOpen }) {
  return (
    // add active class to the navbar depending on the state of menuOpen
    // if menuOpen is true, add active class
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img src="/assets/camlogo.png" />
            vMedia
          </a>
          <div className="item">
            <a href="#">
              <img src="/assets/facebook.png" alt="" className="icon" />
            </a>
            <a href="#">
              <img src="/assets/linkedin.png" alt="" className="icon" />
            </a>
            <a href="#">
              <img src="/assets/behance.png" alt="" className="icon" />
            </a>
          </div>
        </div>
        <div className="right">
          {/* set menuOpen to its opposite state */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
