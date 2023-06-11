import "./App.css";
import Menu from "./containers/Menu";
import Container from "./containers/Container";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { isUserMobile } from "./features/userFav";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch } from "react-redux";
import { setUserMobile } from "./features/userFav";
function App() {
  const mobile = useSelector(isUserMobile);
  const dispatch = useDispatch();
  return (
    <div className="app">
      <Router>
        <div className="appBody">
          <Menu />

          <div className={mobile ? "main__container zxc" : "main__container"}>
            <div className="main-block ">
              {mobile && (
                <ArrowBackIcon
                  className="arrow-back"
                  onClick={() => {
                    dispatch(setUserMobile(false));
                  }}
                />
              )}
              <Container />
            </div>
            <div className="fakeheight" />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
