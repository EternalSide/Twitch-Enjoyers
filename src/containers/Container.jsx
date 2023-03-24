import React from 'react'
import Random from '../pages/Random/Random';
import News from '../pages/News/News'
import Search from '../pages/Search/Search'
import Fav from '../pages/Fav/Fav'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Menu from './Menu';
function Container() {
  return (
    <div class="main-container">
        <Routes> 
            <Route path="/" element={<News/>} />  
            <Route path="/random" element={<Random/>} />  
            <Route path="/search" element={<Search/>} />  
            <Route path="/fav" element={<Fav/>} />  
        </Routes>
  </div>
  );
}

export default Container