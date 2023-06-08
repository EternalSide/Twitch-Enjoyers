import React, { useState, useRef, useEffect } from "react";
import "./Post.css";
import { useDispatch } from "react-redux";
import { setNewLength } from "../../features/userFav.js";
import { showLength } from "../../features/userFav.js";
import { useSelector } from "react-redux";
import { setNewPosts } from "../../features/userFav.js";
import { showPosts } from "../../features/userFav.js";
const Post = ({ image, message, isActive, buttons, children, messageClass, copyMessage, Fav, user, userPic, deleteButton }) => {
  const copyTextDone = "Скопировано ✓";
  const [copyMessageButton, setCopyMessage] = useState("Скопировать");
  const [copyButtonDisabled, setCopyButtonDisabled] = useState(false);
  const [post, setPost] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const postsLength = useSelector(showLength);
  const dispatch = useDispatch();
  const postsFromLocalStorage = JSON.parse(localStorage.getItem("posts"));
  const [favz, setFav] = useState(false);
  const [inFav, setInfav] = useState(postsFromLocalStorage?.find((item) => item.includes(message)));
  const posts = useSelector(showPosts);
  useEffect(() => {
    setPost(message);

    const postsFromLocalStorage = JSON.parse(localStorage.getItem("posts"));
    if (postsFromLocalStorage) {
      setAllPosts(postsFromLocalStorage);
    }
  }, [message]);

  const bgf = () => {
    return posts.some((post) => post === message);
  };

  //Добавление в избранное
  const sendToFavourites = () => {
    if (posts.some((post) => post.includes(message))) return;
    setFav(true);
    dispatch(setNewLength(postsLength + 1));
    const updatedAllPosts = [message, ...posts];
    dispatch(setNewPosts(updatedAllPosts));
    localStorage.setItem("posts", JSON.stringify(updatedAllPosts));
  };

  //При удаление мы перезаписываем посты в редаксе
  const handleDeletePasta = () => {
    dispatch(setNewLength(postsLength - 1));
    const newFilteredMassive = [...posts.filter((item) => item !== message)];
    dispatch(setNewPosts(newFilteredMassive));
    localStorage.setItem("posts", JSON.stringify(newFilteredMassive));
  };

  return (
    <div class="post">
      <img
        src={
          userPic
            ? userPic
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkx4UELudBuke52_WyI8nfW1BC5Jv8vFSNtRpGOAJBf-r6TJCssVi9ZPTIG7vzEdCW2Bc&usqp=CAU"
        }
        alt="Фото Lessa'"
        class="post__pic"
        onClick={() => window.open("https://github.com/EternalSide", "_blank")}
      />

      <div class={messageClass ? "post__container post__container_message" : "post__container"}>
        <div class="pasta">
          <span class="post__pastabefore">{user ? user : "EternalSide:"}</span>
          {message ? message : children}
        </div>

        {/* Если есть кнопки */}
        {buttons && (
          <div class="post__buttons">
            <div className="post__buttons-container">
              <button
                onClick={() => {
                  setCopyMessage(copyTextDone);

                  setTimeout(() => {
                    setCopyMessage("Скопировать");
                  }, 1000);
                  navigator.clipboard.writeText(message);
                }}
                type="button"
                className={copyMessageButton === copyTextDone ? "post__button post__button_green" : "post__button"}
                disabled={copyButtonDisabled}
              >
                {copyMessageButton}
              </button>
              {deleteButton ? (
                <button onClick={handleDeletePasta} className="post__button post__button_green">
                  Удалить
                </button>
              ) : (
                <button onClick={sendToFavourites} className={bgf() ? "post__button post__button_green" : "post__button"}>
                  {bgf() ? "В избранном ✓" : "В избранное"}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
