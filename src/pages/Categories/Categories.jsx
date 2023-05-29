import React from "react";
import Teg from "../../components/Teg/Teg";
import "./Categories.css";
const Categories = () => {
  return (
    <div className="main-block main-block_type_category">
      <div className="category">
        <Teg
          id="1"
          link="https://www.twitch.tv/nix"
          text="Nix"
          img="https://game-tournaments.com/media/logo/p7985.png"
        />
        <Teg
          id="0"
          text="Arthas"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq0Pi2cYYDEUC2bmzC6g1M6dACpOuIfarNtA&usqp=CAU   "
        />
        <Teg
          id="2"
          text="Stray"
          img="https://avatars.dzeninfra.ru/get-zen_doc/57035/pub_5d4619a8b5e99200ae09556c_5d461a44f2df2500adee7806/scale_1200"
        />
      </div>
    </div>
  );
};

export default Categories;
