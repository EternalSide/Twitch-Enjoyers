import React from 'react'
import { NavLink } from "react-router-dom"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Random from '../pages/Random/Random';
function menuItem({name, info, icon, url}) {
  const classActive = `left-menu__item left-menu__item_type_chosen`
  return (

    <NavLink to={url} >
  <div  className="left-menu__item">

    <img
      src={icon}
      alt=""
      className="left-menu__img"
    />
    <div>
      <h2 className="left-menu__title">{name}</h2>
      <p className="left-menu__subtitle ">{info}</p>
    </div>
  </div>

</NavLink>

  );
}

export default menuItem