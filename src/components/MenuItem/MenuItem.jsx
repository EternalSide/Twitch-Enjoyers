import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserMobile } from "../../features/userFav";
import { useMediaQuery } from "@mui/material";

function MenuItem({ link, name, info, icon, url }) {
  const dispatch = useDispatch();
  const mobileResolution = useMediaQuery("(max-width:620px)");

  return (
    <NavLink
      onClick={() => {
        if (mobileResolution) {
          dispatch(setUserMobile(true));
        }
      }}
      target={link && "_blank"}
      to={url}
      className={({ isActive }) => {
        if (isActive) {
          return `left-menu__item left-menu__item_type_chosen `;
        } else if (link) {
          return `left-menu__item  left-menu__item_type_link`;
        } else {
          return `left-menu__item`;
        }
      }}
    >
      <img src={icon} alt={name} className="left-menu__img" />
      <div>
        <h2 className="left-menu__title">{name}</h2>
        {!link && <p className="left-menu__subtitle">{info}</p>}
      </div>
    </NavLink>
  );
}

export default MenuItem;
