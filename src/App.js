import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
// Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Post from "./pages/Post";
import CoverMap from "./pages/CoverMap";
import Private from "./pages/Private";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
// Styles
import theme from "./styled/theme";
import styled from "styled-components";

// Utils
import axios from "axios";
import { StylesProvider } from "@material-ui/core/styles";
axios.defaults.baseURL = "https://bruin-share.herokuapp.com/";

const AppStyle = styled.div`
  height: 100vh;
`;

const token = window.localStorage.getItem("AuthToken");
if (token) {
  axios.defaults.headers.common["authorization"] = token;
} else {
  axios.defaults.headers.common["authorization"] = null;
}

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
              <Route path="/" exact component={CoverMap}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/signup" component={Signup}></Route>
              <Route path="/home" exact component={Home}></Route>
              <Route exact path="/posts/:postId" component={Post}></Route>
              <Route exact path="/private" component={Private}></Route>
              <Route
                exact
                path="/profile/:postById"
                component={Profile}
              ></Route>
              <Route  component={NotFound}></Route>
            
          </Switch>
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
