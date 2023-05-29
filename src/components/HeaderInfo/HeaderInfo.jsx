import React from "react";

const HeaderInfo = () => {
  return (
    <>
      <img
        className="left-menu__logo "
        src="https://logodownload.org/wp-content/uploads/2017/04/twitch-logo-0-1.png"
        alt=""
      />
      <div className="left-menu__contacts">
        <a>
          <img
            className="left-menu__contacts-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
            alt=""
            onClick={() => window.open("https://t.me/Eternal_Side", "_blank")}
          />
        </a>
        <a>
          <img
            className="left-menu__contacts-img"
            src="https://icones.pro/wp-content/uploads/2021/06/icone-github-orange.png"
            alt=""
            onClick={() =>
              window.open("https://github.com/EternalDestruction", "_blank")
            }
          />
        </a>
      </div>
    </>
  );
};

export default HeaderInfo;
