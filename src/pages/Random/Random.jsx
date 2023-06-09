import { useEffect, useState, useRef } from "react";
import { Pasti } from "../../materials/Pasti";
import Post from "../../components/Post/Post";

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

  const buttonRef = useRef();
  useEffect(() => {
    setPasta(Randomx());
  }, [buttonRef]);
  const changeRandom = () => {
    return setPasta(Randomx());
  };

  return (
    <>
      <Form disabled />
      <Post>
        <button
          ref={buttonRef}
          type="button"
          className="random__change"
          onClick={() => {
            setMessage("Скопировать");
            return changeRandom();
          }}
        >
          RANDOM
        </button>
      </Post>
      <Post
        userPic="https://ih1.redbubble.net/image.1798075794.4772/st,small,507x507-pad,600x600,f8f8f8.jpg"
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
