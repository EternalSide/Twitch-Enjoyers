import Post from "../../components/Post/Post";
import Form from "../../components/Form/Form";
import "./Fav.css";
const Fav = () => {
  const userFavouritesPosts = localStorage.getItem("posts");
  return (
    <>
      <div className="fakeheight" />
      <Post
        message={
          userFavouritesPosts ? userFavouritesPosts : "Список избранного пуст"
        }
      />
      <Form />
    </>
  );
};

export default Fav;
