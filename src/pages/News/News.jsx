import React from "react";
import Post from "../../components/Post/Post";
import Form from "../../components/Form/Form";
import "./News.css";
const News = () => {
  return (
    <>
      <div className="fakeheight" />
      <div class="messages">
        <Post>
          {" "}
          <h3> update v 0.1</h3>
          <br></br>
          <h4>Что мы добавили на сайт?</h4>
          <ul>
            <li>1. 1к + паст</li>
            <li>2. Чат для пользователей</li>
            <li>3. Рандомайзер</li>
            <li>3. Поиск </li>
            <li>4. Избранное </li>
            <li>5. Смена фона </li>
            <p className="messages__dop">А также прочие приятные мелочи 🚀</p>
          </ul>
        </Post>
        <Form disabled />
      </div>
    </>
  );
};

export default News;
