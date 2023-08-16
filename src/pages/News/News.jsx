import Post from "../../components/Post/Post";
import Form from "../../components/Form/Form";
import "./News.css";
import useMediaQuery from "@mui/material/useMediaQuery";
const News = () => {
  return (
    <>
      <div className="messages">
        <Post userPic="https://i.pinimg.com/736x/ba/5a/1f/ba5a1fa3119cc2c880880184a8f1eada.jpg">
          Первое обновление! Добавили:
          <ul>
            <li>1. 1к + паст</li>
            <li>2. Рандомайзер</li>
            <li>3. Поиск </li>
            <li>4. Избранное</li>
          </ul>
          <img
            className="gif"
            src="https://i.ppy.sh/60cf57e0e6c0a15b22bab02d89345ac213db2547/687474703a2f2f7061312e6e61727669692e636f6d2f353933372f656136633161376466646161616233363437396436366531313364626539353933653636306461305f68712e676966"
          />
        </Post>
     

        <Form disabled />
      </div>
    </>
  );
};

export default News;
