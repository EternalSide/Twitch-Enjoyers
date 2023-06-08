import Random from "../pages/Random/Random";
import News from "../pages/News/News";
import Search from "../pages/Search/Search";
import Fav from "../pages/Fav/Fav";
import Fone from "../pages/Fone/Fone";
import Categories from "../pages/Categories/Categories";
import NotFound from "../components/NotFound/NotFound";
import Login from "../pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import All from "../pages/All/All";
import Profile from "../pages/Profile/Profile";
function Container() {
  return (
    <Routes>
      <>
        <Route path="*" element={<NotFound />} />
        <Route path="/news" element={<News />} />
        <Route path="/random" element={<Random />} />
        <Route path="/search" element={<Search />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/" element={<All />} />
        <Route path="/fone" element={<Fone />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/categories" element={<Categories />} />
      </>
    </Routes>
  );
}

export default Container;
