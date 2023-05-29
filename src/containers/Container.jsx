import Random from "../pages/Random/Random";
import News from "../pages/News/News";
import Search from "../pages/Search/Search";
import Fav from "../pages/Fav/Fav";
import Fone from "../pages/Fone/Fone";
import Categories from "../pages/Categories/Categories";
import NotFound from "../components/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
import All from "../pages/All/All";
function Container() {
  return (
    <Routes>
      <>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<News />} />
        <Route path="/random" element={<Random />} />
        <Route path="/search" element={<Search />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/all" element={<All />} />
        <Route path="/fone" element={<Fone />} />
        <Route path="/categories" element={<Categories />} />
      </>
    </Routes>
  );
}

export default Container;
