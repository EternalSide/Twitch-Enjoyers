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
        <Post userPic="https://i.pinimg.com/736x/ba/5a/1f/ba5a1fa3119cc2c880880184a8f1eada.jpg">
          Сегодня я решил полностью переписать проект. Сам внешний вид сайта останится неизменным, но полноценно выпустив новое обновление,
          Twitcher станет социальной сетью для любителей Твитча, мы полностью перепишем структуру, на которой работает проект и это позволит
          нам:
          <br /> <br />
          1. Добиться максимальной производильности и скорости работы.
          <br /> <br />
          2. Профиль и возможность делиться им.
          <br /> <br />
          3. Чаты/Личные сообщения и Знакомства.
          <br /> <br />
          4. Свои пасты, свои посты, и не только.
          <br /> <br />
          5. Кастомизация любых элементов Twitcher.
          <br />
          <img className="gif" src="https://i.pinimg.com/originals/9c/76/78/9c7678ebeec20db3caf40666c444ab99.gif" />
        </Post>

        <Form disabled />
      </div>
    </>
  );
};

export default News;
