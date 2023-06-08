import React from "react";
import Post from "../../components/Post/Post";
import Form from "../../components/Form/Form";
import "./News.css";
const News = () => {
  return (
    <div className="main-block">
      <div className="fakeheight"> </div>
      <div class="messages">
        <Post>
          {" "}
          <h3> update v 0.1</h3>
          <br></br>
          <h4>Что мы добавили на сайт?</h4>
          <ul>
            <li>1. 1к + паст</li>

            <li>2. Рандомайзер</li>
            <li>3. Поиск </li>
            <li>4. Избранное* </li>
          </ul>
        </Post>
        <Form disabled />
      </div>
    </div>
  );
};

export default News;
