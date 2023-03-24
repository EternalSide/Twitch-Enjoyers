import React from 'react'
import MenuItem from "../components/MenuItem";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { NavLink } from "react-router-dom"
import Random from '../pages/Random/Random';
function Menu() {


  return (

    <div>

         <h1 className="left-menu__title_s">Все пасты в одном месте</h1>
        
    
    
<MenuItem
  url="/"
          name="Новости"
          info="update: Поделиться пастой и профиль"
          icon="http://sun9-41.userapi.com/s/v1/ig2/I0sP2uap9NVPyVC0r1NL4Xl4nPGJml6oq2TCiLK3KtUg8TDfJdHIFJ0NmrOftFa8QZaaUhegGGJKfMyHgLBtytV3.jpg?size=200x200&quality=95&crop=1,0,562,562&ava=1"
        />
       
   
        <MenuItem
          name="Рандом"
          url="random"
          info="У тебя нету зарандомленных паст"
          icon="https://blog.cdn.own3d.tv/resize=fit:crop,width:600,height:314/BoYRMteyQBOo9hgM2TO0"
       
        />
        <MenuItem
          name="Поиск"
          info="Привет!"
          url="search"
          icon="https://www.pngall.com/wp-content/uploads/8/Search-PNG-High-Quality-Image.png"
       
        />
        <MenuItem
          name="Избранное"
          url="fav"
          info="Привет!"
          icon="https://images.emojiterra.com/twitter/v13.1/512px/2b50.png"
      
        />
        <MenuItem
          name="Сменить Фон"
          info="Привет!"
          icon="https://i.pinimg.com/564x/77/92/96/779296fa7a3aec5e9cc1bd645564c0ba.jpg"
        
        />
        <MenuItem
          name="Контакты"
          info="Привет!"
          icon="https://i.pinimg.com/736x/3b/35/9d/3b359de38d89fcd987dc4963cc61b25f.jpg"
          
        />
     
        </div>
   
  );
}

export default Menu