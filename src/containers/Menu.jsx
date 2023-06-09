import "./Menu.css";
import MenuItem from "../components/MenuItem/MenuItem";
import HeaderInfo from "../components/HeaderInfo/HeaderInfo";

//Общее Число паст
import { lengthOfPasti } from "../materials/Pasti";

//Redux
import { useSelector } from "react-redux";
import { showLength } from "../features/userFav";

function Menu() {
  const userFavLength = useSelector(showLength);

  return (
    <div className="left-menu__test ">
      <HeaderInfo />
      <MenuItem
        url="/"
        name="Все пасты"
        info={`Паст добавлено: ${lengthOfPasti} `}
        icon="https://cdn.iconscout.com/icon/free/png-256/free-twitch-11-461838.png?f=webp"
      />
      <MenuItem
        url="/news"
        name="Новости"
        info="Выпустили первую версию!"
        icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkx4UELudBuke52_WyI8nfW1BC5Jv8vFSNtRpGOAJBf-r6TJCssVi9ZPTIG7vzEdCW2Bc&usqp=CAU"
      />

      <MenuItem
        name="Рандом"
        url="random"
        info="опять работа?"
        icon="https://ih1.redbubble.net/image.1798075794.4772/st,small,507x507-pad,600x600,f8f8f8.jpg"
      />
      <MenuItem
        name="Поиск"
        info="Найди свою любимую пасту <3"
        url="search"
        icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzlfJ9s2OXRYeoraa78-X8pNFgG-AWr5e2fGgCYOghzq11Qqa6URhC6jB8R6tG_FxMKw&usqp=CAU"
      />
      <MenuItem
        name="Избранное"
        info={`Паст в избранном: ${userFavLength}`}
        url="fav"
        icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFvDAtbG-cpaYDEhbIy0Bw5ALqYxD2n2yWgrdwLkLZorBnb5ORwfj-_IDU5QXabOCJYg&usqp=CAU"
      />

      <MenuItem
        link
        name="Telegram"
        url="https://t.me/eternalmaybe"
        icon="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
      />
      <MenuItem
        link
        name="Github"
        url="https://github.com/EternalSide"
        icon="https://icones.pro/wp-content/uploads/2021/06/icone-github-orange.png"
      />
    </div>
  );
}

export default Menu;
