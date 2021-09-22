import React, { useState } from "react";
import "./team.scss";
function Team() {
  // set carousel to initial item
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      icon: "/assets/camlogo.png",
      title: "Photographer",
      desc: "Hello, I am a Photographer with 5 years experience and vMedia's team leader",
      img: "/assets/TM.jpg",
      name: "Oluwadare Toromo",
      // qvjO4VpWwNw  m8uLhKTiL8Y
      // img: "https://source.unsplash.com/qvjO4VpWwNw"
      links: "https://web.facebook.com/oluwadare.oluwatoromo"
    },
    {
      id: 2,
      icon: "/assets/camlogo.png",
      title: "Designer",
      desc: "Hello, I am the team leader for all the cool designs on vMedia. We'd love to work with you",
      name: "Aina Emmanuel",
      img: "/assets/Linux1.jpg",
      links: "https://web.facebook.com/emmanuel.olamideaina",
    },
    {
      id: 3,
      icon: "/assets/camlogo.png",
      title: "Videography",
      desc: "Hi I am Akinwole, the videography team leader, it's so nice to meet you.",
      name: "Akinwole Oluwapelumi",
      img: "/assets/pelumi.jpg",
      links: "https://web.facebook.com/akinwole.pelumi"
    },
  ];
  //   handle click funcion
  const handleClick = (direction) => {
    // on prev, if the current slide is not the first slide, then prev it. else if it is the first slide then go to the lastslide
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : //   else if the current slide is still in range then next it or go back to first slide when you reach the end
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works team" id="works">
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
                      <a href={d.links}>
                        <img src="/assets/facebook.svg" />
                      </a>
                    </div>
                    <h3>{d.title}</h3>
                    <p>{d.desc} </p>
                    <h5>{d.name}</h5>
                    {/* <span href={d.links}>Facebook</span> */}
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

export default Team;
