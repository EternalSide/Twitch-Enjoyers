import React from "react";
import { Pasti } from "../../materials/Pasti";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Teg = ({ img, text, link, id, url }) => {
  const text1 = Pasti.map((item) => item.genre);
  const text2 = text1.filter((item) => item.includes({ id }));

  return (
    <NavLink to={`/${id}`} className="category__teg">
      <img className="category__img" src={img} />

      <div className="category__bottom">
        <div>
          <h3>{text}</h3>
          <p>Паст: {text2.length}</p>
          <a
            className="category__link category__link_open"
            href={link}
            target="_blank"
          >
            Открыть
          </a>
        </div>
        <div>
          <a className="category__link" href={link} target="_blank">
            Twitch
          </a>
        </div>
      </div>
    </NavLink>
  );
};

export default Teg;
