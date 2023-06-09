import Post from "../../components/Post/Post";
import Form from "../../components/Form/Form";
import "./News.css";
const News = () => {
  return (
    <>
      <div className="messages">
        <Post>
          <h3 className="text-yellow-300"> update v 0.1</h3>
          <br></br>
          <h4>Что мы добавили на сайт?</h4>
          <ul>
            <li>1. 1к + паст</li>

            <li>2. Рандомайзер</li>
            <li>3. Поиск </li>
            <li>4. Избранное* </li>
          </ul>
        </Post>
        <Form disabled />
      </div>
    </>
  );
};

export default News;
