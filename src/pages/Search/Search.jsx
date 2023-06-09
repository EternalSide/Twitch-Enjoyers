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
  const dispatch = useDispatch();
  const data = useSelector(showSearchResults);

  return (
    <>
      <Form
        placeholder="Введите запрос.."
        makeSubmit={(searchText) => {
          //На данный момент поиск не чувствителен к регистру
          const searchResult = Pasti.filter((pasta) => pasta.text.toLowerCase().includes(searchText.toLowerCase()));
          dispatch(setSearchResultsRedux(searchResult));
        }}
      />
      <div className="messages  search ">
        {data.length > 0 ? (
          <Post
            userPic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzlfJ9s2OXRYeoraa78-X8pNFgG-AWr5e2fGgCYOghzq11Qqa6URhC6jB8R6tG_FxMKw&usqp=CAU"
            message={`Совпадений: ${data?.length}`}
          />
        ) : (
          false
        )}
        <Post>
          <div className="pasta">
            Поиск среди всех паст в базе
            <div className="popular__options">
              <h3 className="popular__title">Популярные запросы:</h3>

              <div className="hide__block">
                <div className="popular__buttons">
                  <SearchButton text="Папич" />
                  <SearchButton text="Стример" />
                  <SearchButton text="Чат" />
                  <SearchButton text="Лох" />
                  <SearchButton text="zxc" />
                  <SearchButton text="кабан" />
                </div>
              </div>
            </div>
          </div>
        </Post>
      </div>
      <div className="search__container">
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
    </>
  );
};
export default Search;
