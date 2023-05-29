import { useState, useRef } from "react";
import "./Form.css";
import { db } from "../../database/firebase";
import { collection, addDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
const Form = ({ disabled, placeholder, makeSubmit }) => {
  const [userMessage, setUserMessage] = useState("");
  const formRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    addDoc(collection(db, "messages"), {
      message: userMessage,
      time: serverTimestamp(),
    });

    return makeSubmit(userMessage);
  };

  function changeUserBg(link) {
    return makeSubmit(link);
  }
  const inputRef = useRef();
  return (
    <>
      <div className="form__container">
        <form
          className=""
          onSubmit={(e) => {
            e.preventDefault();
            return makeSubmit(inputRef.current.value);
          }}
        >
          <input
            onChange={(event) => {
              // setUserMessage(event.target.value);
            }}
            disabled={disabled}
            placeholder={
              placeholder
                ? `${placeholder}`
                : "Данное поле не предназначено для отправки сообщений."
            }
            type="text"
            class="form__input"
            ref={inputRef}
          />
        </form>
      </div>
    </>
  );
};

export default Form;
