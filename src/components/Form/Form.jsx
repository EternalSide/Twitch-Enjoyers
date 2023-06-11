import { useState, useRef } from "react";
import "./Form.css";

const Form = ({ disabled, placeholder, makeSubmit }) => {
  const [userMessage, setUserMessage] = useState("");
  const inputRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
    return makeSubmit(userMessage);
  };

  return (
      <div className="form__container">
        <form className="form" onSubmit={submitForm}>
          <input
            onChange={(event) => {
              setUserMessage(event.target.value);
            }}
            disabled={disabled}
            placeholder={placeholder ? `${placeholder}` : "Данное поле не предназначено для отправки сообщений."}
            type="text"
            className="form__input"
            ref={inputRef}
          />
        </form>
      </div>
  );
};

export default Form;
