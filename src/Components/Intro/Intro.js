import React, { useEffect, useRef } from "react";
import "../Intro/intro.scss";
import { init } from 'ityped'


function Intro() {
    const textRef = useRef();
  useEffect(() => {
      init(textRef.current, {
          showCursor: true,
          backDelay:1500,
          backSpeed:55,
          strings: ["Designers", "Photographers", "Videographers"]
      })
  }, [])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/camlogo.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello! We Are</h2>
          <h1>vMedia</h1>
          <h3>Corporate&nbsp;<span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio" className="navarrow">
        <img src="assets/chevron.svg" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
