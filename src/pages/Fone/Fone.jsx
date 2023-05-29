import React from "react";
import Form from "../../components/Form/Form";
import Post from "../../components/Post/Post";
const Fone = () => {
  return (
    <div class="main-block main-block_type_news">
      <div class="messages"></div>
      <Post
        message={
          "Привет! Я что-то типо АИ в мире Твитча. Хочешь сменить фон? Достаточно просто отправить мне ссылку."
        }
      />
      <Form
        placeholder={"Введите сообщение.."}
        makeSubmit={(link) => {
          console.log(link);
        }}
      />
    </div>
  );
};

export default Fone;
