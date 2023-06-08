import { useState } from "react";
import { Pasti } from "../../materials/Pasti";
import Form from "../../components/Form/Form";
import Post from "../../components/Post/Post";
import "./Search.css";
import SearchButton from "./SearchButton";
import { useSelector, useDispatch } from "react-redux";
import { showSearchResults } from "../../features/userFav";
import { setSearchResultsRedux } from "../../features/userFav.js";
const Search = () => {
  const [searchResults, setSearchResults] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector(showSearchResults);
  console.log(data);
  return (
    <div className="main-block">
      <div className="fakeheight" />
      <Form
        placeholder="Введите запрос.."
        makeSubmit={(searchText) => {
          //На данный момент поиск не чувствителен к регистру
          const searchResult = Pasti.filter((pasta) => pasta.text.toLowerCase().includes(searchText.toLowerCase()));
          dispatch(setSearchResultsRedux(searchResult));
        }}
      />
      <div class="messages  search ">
        {data.length > 0 ? (
          <Post
            userPic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzlfJ9s2OXRYeoraa78-X8pNFgG-AWr5e2fGgCYOghzq11Qqa6URhC6jB8R6tG_FxMKw&usqp=CAU"
            message={`Совпадений: ${data?.length}`}
          />
        ) : (
          false
        )}
        <Post>
          <p class="pasta">
            Поиск среди всех паст в базе
            <div class="popular__options">
              <h3 class="popular__title">Популярные запросы:</h3>

              <div class="hide__block">
                <div class="popular__buttons">
                  <SearchButton text="Папич" />
                  <SearchButton text="Стример" />
                  <SearchButton text="Чат" />
                  <SearchButton text="Лох" />
                  <SearchButton text="zxc" />
                  <SearchButton text="кабан" />
                </div>
              </div>
            </div>
          </p>
        </Post>
      </div>
      <div class="search__container">
        {data?.map((pasta) => {
          return (
            <Post
              userPic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzlfJ9s2OXRYeoraa78-X8pNFgG-AWr5e2fGgCYOghzq11Qqa6URhC6jB8R6tG_FxMKw&usqp=CAU"
              buttons
              message={pasta.text}
              copyMessage="Скопировать"
            />
          );
        })}
      </div>
    </div>
  );
};
export default Search;
