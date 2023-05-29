import React, { useState, useRef, useEffect } from "react";
import { Pasti } from "../../materials/Pasti";
import Form from "../../components/Form/Form";
import Post from "../../components/Post/Post";
import "./Search.css";
import SearchButton from "./SearchButton";
import { useMemo, memo } from "react";
const Search = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [test, setTest] = useState([]);
  const getSearchResults = (data) => {
    return setSearchResults(data);
  };
  const searchRef = useRef(null);

  // useEffect(() => {
  //   searchRef?.current?.scrollIntoView();
  // }, [searchResults]);
  useEffect(() => {
    setTest(false);
  }, []);

  useEffect(() => {
    setTest(true);
    console.log(searchResults);
  }, [searchResults]);

  return (
    <>
      <div className="fakeheight" />
      <Form
        placeholder="Введите запрос"
        makeSubmit={(searchText) => {
          const searchResult = Pasti.filter((pasta) =>
            pasta.text.includes(searchText)
          );
          return setSearchResults(searchResult);
        }}
      />
      <div class="messages  search ">
        {searchResults ? (
          <Post message={`Совпадений: ${searchResults.length}`} />
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
                  <SearchButton
                    text="Папич"
                    setSearchResults={setSearchResults}
                  />
                  <SearchButton
                    text="стример"
                    setSearchResults={setSearchResults}
                  />
                  <SearchButton
                    text="чат"
                    setSearchResults={setSearchResults}
                  />
                  <SearchButton
                    text="кабан"
                    setSearchResults={setSearchResults}
                  />
                </div>
              </div>
            </div>{" "}
          </p>
        </Post>
      </div>
      <div class="search__container">
        {searchResults?.map((pasta) => {
          return <Post buttons message={pasta.text} />;
        })}
      </div>
    </>
  );
};
export default Search;
