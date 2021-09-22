import React, { useState } from "react";
import "./works.scss";
function Works() {
  // set carousel to initial item
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      icon: "/assets/cam.png",
      title: "Photography",
      desc: "Do you seek stunning photography? Search no more cos we've got you with a camera that puts a world of possibilities at your fingertips",
      img: "/assets/cameragirl.svg",
    },
    {
      id: 2,
      icon: "/assets/paint-palette.svg",
      title: "Design",
      desc: "At Vmedia, we create to inspire. We're here to make your business thrive on the wheel of creative designs.",
      img: "/assets/pngdesign.png",
    },
    {
      id: 3,
      icon: "/assets/videography.svg",
      title: "Videography",
      desc: "We are the choice of your creation, a media world bringing a new perspective to your every moment",
      img: "/assets/pngvideox.png",
    },
  ];
  //   handle click funcion
  const handleClick = (direction) => {
    // on prev, if the current slide is not the first slide, then prev it. else if it is the first slide then go to the lastslide
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
    //   else if the current slide is still in range then next it or go back to first slide when you reach the end
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      {/* Carousel Slider */}
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => {
          return (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc} </p>
                    <span>Services</span>
                  </div>
                </div>
                <div className="right">
                  <img src={d.img} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <img
        src="assets/chevron.svg"
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/chevron.svg"
        className="arrow right"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}

export default Works;
