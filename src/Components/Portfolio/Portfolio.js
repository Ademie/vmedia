import React, { useState, useEffect } from "react";
import { studioPortfolio, naturePortfolio, outdoorPortfolio, photoshopPortfolio, randomPortfolio } from "../../data";
import "../Portfolio/portfolio.scss";
import PortfolioList from "../PortfolioList/PortfolioList";


function Portfolio() {
  const [selected, setSelected] = useState("studio");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "studio",
      title: "Studio",
    },
    {
      id: "nature",
      title: "Nature",
    },
    {
      id: "outdoor",
      title: "Outdoor",
    },
    {
      id: "photoshop",
      title: "Photoshop",
    },
    {
      id: "random",
      title: "Random",
    },
  ];
  // use effect to display portfolio items
  useEffect(() => {
    switch (selected) {
      case "studio":
        setData(studioPortfolio);
        break;
      case "nature":
        setData(naturePortfolio);
        break;
      case "outdoor":
        setData(outdoorPortfolio);
        break;
      case "photoshop":
        setData(photoshopPortfolio);
        break;
      case "random":
        setData(randomPortfolio);
        break;
      default:
        setData(studioPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => {
          return(
            <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>

          )
        })}


      </div>
    </div>
  );
}

export default Portfolio;
