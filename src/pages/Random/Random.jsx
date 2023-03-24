

import React from "react";
import {Pasti} from "../../pasti/Pasti"
import Post from "../../components/Post"
import ReactDOMServer from 'react-dom/server';
function Randomx(){

  const randomNumber = Math.floor(Math.random() * Pasti.length);
  return Pasti[randomNumber].text;
}
 function test()
{

  document.querySelector('.ra-co').innerHTML =   ReactDOMServer.renderToString(<Post  />);
}
function Random() {


  return (
    <div class="main-block main-block_type_random">
<form action="#" class="send-form" id="randomx">
  <input
    disabled
    placeholder="Данное поле не предназначено для отправки сообщений."
    type="text"
    name=""
    id=""
    class="send-message"
  />
</form>
<div class="messages">
  <div class="ra-co"></div>
  <div class="post">
    <img
      src="https://avatars.githubusercontent.com/u/118743608?v=4"
      alt=""
      class="pic"
    />
    <div class="container__block">
      <p class="pasta">
        <span class="pastabefore">Lesabone:</span>

        <button type="button" class="change" onClick={test}>
          RANDOM
        </button>
      </p>
    </div>
  </div>
</div>
</div>
  );
}

export default Random;
export {Randomx, test}