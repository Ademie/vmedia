import React from "react";
import "../Testimonials/testimonials.scss";
function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Ayobami David",
      title: "EVENT PLANNER",
      desc: "This media company sparked my love for corporate photography, now I reach out to them to cover every event I'm hosting.",
      img: "https://source.unsplash.com/y8yimL21z8s",

    },
    {
      id: 2,
      name: "Adetunji Ewatomi",
      title: "MAKE-UP ARTIST",
      desc: "I got to know about vMedia at the last minute to my wedding when the main videogapher came up with an excuse that he wouldn't show up. Thanks to vMedia, I've got beautiful memories to look back to.",
      img: "https://source.unsplash.com/_qO8lI6U8Kk",
      featured: true,
    },
    {
      id: 3,
      name: "Benjamin Ottah",
      title: "MASTERS STUDENT",
      desc: "I worked with vMedia as an undergraduate intern and I affirm that it is a team of great minds. Now I always reach to them when I need the best...",
      img: "https://source.unsplash.com/yIGpgddzppE",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => {
          return (
            <div className={d.featured ? "card featured" : "card"}>
            {/* Added featured as an hover effect on cards */}
              <div className="top">
                <img className="user" src={d.img} alt="" />
              </div>
              <div className="center" style={{textAlign:'center'}}>
                <q > {d.desc}</q>
              </div>
              <div className="bottom">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
