import React from 'react'

const News = () => {
  return (
    <div class="main-block main-block_type_slimegang">
    <a href="#" class="zakrep">
      <p class="zakrep__title">Закреплено:</p>
      <p class="zakrep__post">Выпускаем наше первое обновление!</p>
    </a>
    <div class="messages">
      <div class="post">
        <img
          src="http://sun9-41.userapi.com/s/v1/ig2/I0sP2uap9NVPyVC0r1NL4Xl4nPGJml6oq2TCiLK3KtUg8TDfJdHIFJ0NmrOftFa8QZaaUhegGGJKfMyHgLBtytV3.jpg?size=200x200&quality=95&crop=1,0,562,562&ava=1"
          alt=""
          class="pic"
        />
        <div id="post1" class="container__block container__block_info">
          <p class="pasta">
            <span class="pastabefore">Lesabone: </span>
            Выпускаем наше первое обновление!
            <li>
              1. Добавили{" "}
              <span
                class="pasta__length
          "
              >
                1000+{" "}
              </span>
              <span
                class="pasta__text
          "
              >
                {" "}
                паст
              </span>{" "}
              в архив
            </li>
            <li>2. Рандом паста</li>
            <li>3. Поиск по ключевым словам </li>
            <li class="emoji_co">
              4. Избранное{" "}
              <img
                class="emoji"
                src="https://images.emojiterra.com/twitter/v13.1/512px/2b50.png"
                alt=""
              />
            </li>
            <li>5. Фон в диалогах</li>
            <p class="dop-info"></p>
          </p>
          <img
            class="gif"
            src="https://steamuserimages-a.akamaihd.net/ugc/1767071261464495338/AD563FDE0EF7DCB2063ABCC3088675B73A323DD1/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
            alt=""
          />
          <div class="likes">
            <button class="like">10</button>
          </div>
          <p class="data">1 Марта в 04:21</p>
        </div>
      </div>
      <div class="post">
        <img
          src="http://sun9-41.userapi.com/s/v1/ig2/I0sP2uap9NVPyVC0r1NL4Xl4nPGJml6oq2TCiLK3KtUg8TDfJdHIFJ0NmrOftFa8QZaaUhegGGJKfMyHgLBtytV3.jpg?size=200x200&quality=95&crop=1,0,562,562&ava=1"
          alt=""
          class="pic"
        />
        <div id="post2" class="container__block container__block_info">
          <p class="pasta">
            <span class="pastabefore">Lesabone: </span>
            update: Обновление поиска
            <li>Добавлено популярное</li>
            <li> Добавлены категории</li>
            <li>Убрали регистрацию</li>
            <li class="emoji_co">Рандом поиск </li>
            <li>Поиск по смайлам</li>
            <li>Удаление паст в избранном</li>
            <li>Фикс багов</li>
            <p class="dop-info"></p>
          </p>

          <div class="likes">
            <button class="like">111</button>
          </div>
          <p class="data">3 Марта в 11:11</p>
        </div>
      </div>
      <div class="post">
        <img
          src="http://sun9-41.userapi.com/s/v1/ig2/I0sP2uap9NVPyVC0r1NL4Xl4nPGJml6oq2TCiLK3KtUg8TDfJdHIFJ0NmrOftFa8QZaaUhegGGJKfMyHgLBtytV3.jpg?size=200x200&quality=95&crop=1,0,562,562&ava=1"
          alt=""
          class="pic"
        />
        <div id="post3" class="container__block container__block_info">
          <p class="pasta">
            <span class="pastabefore">Lesabone: </span>
            update: Поделиться пастой
            <li>
              Теперь любой пользователь может отправить свою пасту на
              общак.
            </li>
            <li>
              {" "}
              После одобрения модерацией, ваша паста будет добавлена в
              базу, а также отобразиться в блоке "Поделиться пастой"
            </li>
            <p class="dop-info"></p>
          </p>

          <div class="likes">
            <button class="like">111</button>
          </div>
          <p class="data">3 Марта в 11:11</p>
        </div>
      </div>

      <form action="#" class="send-form" id="random">
        <input
          disabled
          placeholder="Данное поле не предназначено для отправки сообщений."
          type="text"
          name=""
          id=""
          class="send-message"
        />
      </form>
    </div>
  </div>
  )
}

export default News