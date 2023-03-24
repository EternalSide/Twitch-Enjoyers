import React from 'react'

const Fav = () => {
  return (
    <div class="main-block main-block_type_fav1">
    {localStorage.getItem("Posts") 
    ?  " Здесь посты" 
()
    : (
        <div class="post">
        <img
          src="http://sun9-41.userapi.com/s/v1/ig2/I0sP2uap9NVPyVC0r1NL4Xl4nPGJml6oq2TCiLK3KtUg8TDfJdHIFJ0NmrOftFa8QZaaUhegGGJKfMyHgLBtytV3.jpg?size=200x200&quality=95&crop=1,0,562,562&ava=1"
          alt=""
          class="pic"
        />
        <div id="post3" class="container__block container__block_info">
    <p class="pasta">
      <span class="pastabefore">Lesabone: </span>
           Список Избранного пуст.
    </p>
  </div></div>)}
        <form action="#" class="form_izbr f send-form zx" name="form_izbr">
          <input disabled placeholder="Данное поле не предназначено для отправки сообщений." type="text" name="" id="" class="fd send-message" />
          <button class="izbr__button">Удалить все</button>
        </form>
        <div class="ss"></div>
      </div>
  )
}

export default Fav