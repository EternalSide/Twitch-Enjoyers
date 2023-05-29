import React from 'react'
import { useParams } from 'react-router-dom'
import Categories from '../Categories/Categories'
import Streamers  from '../../helpers/Streamers'
import { NavLink } from 'react-router-dom'
const Category = () => {

const {id} = useParams();

const streamer = Streamers[id]
console.log(Streamers.length)

  return (
    <div>  
      {id >= Streamers.length ? (

(<div>
      
   <img className='category__img category__img_s' src="https://wallpaper.dog/large/20531168.jpg" />
  <div className='category__bottom'>
      <div>
   <h3>Стример не найден</h3>
   <NavLink to= '../categories' className="category__link category__link_open"> 
<p>Категории</p>
   </NavLink>
   </div>
   <div>

  </div>
   </div>
   </div>)


      )
      :
   (
      <>
   <img className='category__img category__img_s' src={streamer.img} />
  <div className='category__bottom'>
      <div>
   <h3>{streamer.text}</h3>
  <p>Паст: </p>
   <a  className="category__link category__link_open" href="#" target="_blank">Откр2ыть</a>
   </div>
   <div>
   <a  className="category__link" href="#" target="_blank">Twitch</a>
  </div>
   </div>
   </>
  )}

    </div>
  )
}

export default Category
