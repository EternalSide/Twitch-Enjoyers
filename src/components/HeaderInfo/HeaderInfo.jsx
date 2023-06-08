import React from "react";
import { Link } from "react-router-dom";
const HeaderInfo = () => {
  return (
    <>
      <Link to="/" className="leftMenu__header">
        <img
          className="left-menu__logo "
          src="https://1000logos.net/wp-content/uploads/2018/10/Twitch-logo.png"
          alt=""
        />
      </Link>
    </>
  );
};

export default HeaderInfo;
