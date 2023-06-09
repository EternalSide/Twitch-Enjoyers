import { Routes, Route } from "react-router-dom";
import { Random, News, Search, Fav, NotFound, All } from "./index";
function Container() {
  return (
    <Routes>
      <Route path="/" element={<All />} />
      <Route path="/news" element={<News />} />
      <Route path="/random" element={<Random />} />
      <Route path="/search" element={<Search />} />
      <Route path="/fav" element={<Fav />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Container;
