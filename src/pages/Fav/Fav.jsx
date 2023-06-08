import Post from "../../components/Post/Post";
import Form from "../../components/Form/Form";
import "./Fav.css";
import { useSelector } from "react-redux";
import { showPosts } from "../../features/userFav";
import { useDispatch } from "react-redux";
import { setNewPosts } from "../../features/userFav";
import { setNewLength } from "../../features/userFav";
const Fav = () => {
  const posts = useSelector(showPosts);
  const dispatch = useDispatch();
  return (
    <div className="main-block">
      <div className="fakeheight" />
      {posts.length < 1 && <Post message={"Список избранного пуст."} />}
      {posts && (
        <>
          {posts.length > 1 && (
            <Post userPic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFvDAtbG-cpaYDEhbIy0Bw5ALqYxD2n2yWgrdwLkLZorBnb5ORwfj-_IDU5QXabOCJYg&usqp=CAU">
              <button
                type="button"
                class="random__change"
                onClick={() => {
                  let isExecuted = window.confirm("Вы уверены?");
                  if (isExecuted) {
                    localStorage.removeItem("posts");
                    dispatch(setNewPosts([]));
                    dispatch(setNewLength(0));
                  }
                }}
              >
                Удалить все
              </button>
            </Post>
          )}
          {posts?.map((item) => {
            return (
              <Post
                userPic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFvDAtbG-cpaYDEhbIy0Bw5ALqYxD2n2yWgrdwLkLZorBnb5ORwfj-_IDU5QXabOCJYg&usqp=CAU"
                buttons
                message={item}
                Fav
                deleteButton
              />
            );
          })}
        </>
      )}
      <Form disabled />
    </div>
  );
};

export default Fav;
