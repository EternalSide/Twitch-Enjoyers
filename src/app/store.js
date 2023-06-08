import { configureStore } from "@reduxjs/toolkit";
import userFav from "../features/userFav";
export default configureStore({
  reducer: {
    userFav: userFav,
  },
});
