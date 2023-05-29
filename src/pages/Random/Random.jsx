import React, { useEffect, useState } from "react";
import { Pasti } from "../../materials/Pasti";
import Post from "../../components/Post/Post";
import { Done } from "@mui/icons-material";
import Form from "../../components/Form/Form";
import "./Random.css";
const Random = () => {
  //Возвращает рандом пасту из массива
  function Randomx() {
    const randomNumber = Math.floor(Math.random() * Pasti.length);
    return Pasti[randomNumber].text;
  }
  const [copyMessage, setMessage] = useState("Скопировать");
  //Рандом паста
  const [pasta, setPasta] = useState([]);
  //Оповещение
  const [notify, setNotify] = useState(false);
  useEffect(() => {
    setPasta(Randomx());
  }, []);
  const changeRandom = () => {
    return setPasta(Randomx());
  };

  return (
    <>
      <div className="fakeheight" />
      <Form />
      <Post>
        <button
          type="button"
          class="random__change"
          onClick={() => {
            setMessage("Скопировать");
            return changeRandom();
          }}
        >
          RANDOM
        </button>
      </Post>
      <Post
        copyMessage={copyMessage}
        setMessage={setMessage}
        buttons
        message={pasta}
        block
        buttonCopyFunc
      />
    </>
  );
};

export default Random;
