import React, { useState, useRef } from "react";
import "./Post.css";
const Post = ({
  image,
  message,
  isActive,
  buttons,
  buttonCopyFunc,
  buttonFavFunc,
  block,
  children,
  messageClass,
  setMessage,
  copyMessage,
}) => {
  const copyTextDone = "Скопировано ✓";
  const [copyButtonDisabled, setCopyButtonDisabled] = useState(false);
  const disableButton = useRef();
  return (
    <div class="post">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkx4UELudBuke52_WyI8nfW1BC5Jv8vFSNtRpGOAJBf-r6TJCssVi9ZPTIG7vzEdCW2Bc&usqp=CAU"
        alt="Фото Lessa'"
        class="post__pic"
        onClick={() => window.open("https://t.me/Eternal_Side", "_blank")}
      />

      <div
        class={
          messageClass
            ? "post__container post__container_message"
            : "post__container"
        }
      >
        <div class="pasta">
          <span class="post__pastabefore">JustError:</span>
          {message ? message : children}
        </div>

        {/* Если есть кнопки */}
        {buttons && (
          <div class="post__buttons">
            <div className="post__buttons-container">
              <button
                ref={disableButton}
                onClick={() => {
                  setMessage("Скопировано ✓");
                  disableButton.current.disabled = true;
                  setTimeout(() => {
                    setMessage("Скопировать");
                    disableButton.current.disabled = false;
                    
                  }, 1000);
                  navigator.clipboard.writeText(message);
                }}
                type="button"
                className={
                  copyMessage === "Скопировано ✓"
                    ? "post__button post__button_green"
                    : "post__button"
                }
                disabled={copyButtonDisabled}
              >
                {copyMessage}
              </button>
              <button
                onClick={() => {
                  console.log("Добавили в избранное");
                }}
                className="post__button"
              >
                В избранное
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
