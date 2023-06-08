import React from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Random from "../../pages/Random/Random";
function menuItem({ link, name, info, icon, url, login, user }) {
  return (
    <NavLink
      onClick={() => {
        if (user) {
          login();
        }
      }}
      target={link && "_blank"}
      to={url}
      className={({ isActive }) => {
        if (isActive) {
          return `left-menu__item left-menu__item_type_chosen`;
        } else if (link) {
          return `left-menu__item  left-menu__item_type_link`;
        } else {
          return `left-menu__item`;
        }
      }}
    >
      <img src={icon} alt="" className="left-menu__img" />
      <div>
        <h2 className="left-menu__title">{name}</h2>
        {!link && <p className="left-menu__subtitle ">{info}</p>}
      </div>
    </NavLink>
  );
}

export default menuItem;
