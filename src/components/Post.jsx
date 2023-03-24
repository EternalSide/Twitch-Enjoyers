import React from 'react'
import { Randomx } from '../pages/Random/Random'
const Post = () => {
  return (
    <div class="post">
    <img
      src="https://avatars.githubusercontent.com/u/118743608?v=4"
      alt=""
      class="pic"
    />
    <div class="container__block">
      <p class="pasta">
        <span class="pastabefore">Lesabone:</span>
 {Randomx()}
      </p>
    </div>
  </div>
  )
}

export default Post