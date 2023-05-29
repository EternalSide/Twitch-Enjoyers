import React from 'react'
import {user} from './Db'
import './UserProfile.css'
import Post from '../../components/Post'
import { NavLink } from 'react-router-dom'
localStorage.setItem('Posts', "true")
const UserProfile = () => {

  const currentUser = user[0];
const Posti = currentUser.userPosts;
console.log(currentUser)
const collection = Posti.map(Post => {
  return <Post text={Post} buttons="false" stena="true"/>
})
  return (
<div>

{currentUser.banned ? (
  <div>
  <img className='category__img category__img_s' src="https://wallpaper.dog/large/20531168.jpg" />
  <div className='category__bottom'>
      <div>
   <h3>Доступ приостановлен.</h3>
   </div>
   </div>
   </div>
) : (
  <div>
 
    <img className='category__img category__img_s' src={currentUser.userBg} />

    <div className='category__bottom'>
        <div>
          <div className='usergif'>
     <h3>{currentUser.name}</h3>
     <img src="https://media.tenor.com/q5t05hf69SwAAAAC/anime-evil-smile.gif" alt="" />
     
     </div>
     <NavLink to="./pics">
     <img class="userPic" src={currentUser.img} alt="" />
     </NavLink>
{currentUser.admin ? (<p>Администратор</p>) : (<p>Пользователь</p>)}
  <p>Паст добавлено: {currentUser.pastiAdded}</p>
  <p>Паст в избранном: {currentUser.pastiFav}</p>
  <p>Любимый стример: TerokVLL</p>
  <p>О себе: {currentUser.bio}</p>

     </div>
   <div className='category__zakrep'>
   <h3 className='category__post-title'>Posts:</h3>
   <div className='cat__fav'>
{Posti.length >= 1 ? (
Posti.map(function(item, i){
 
  return <Post text={item} key="i" buttons="false" stena="true" />
})
) : ('Список избранного пуст')}

   </div>
    </div>

     </div>
 
     </div>
)
}
</div>






  )
}

export default UserProfile