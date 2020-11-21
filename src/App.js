import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import theme from "./styled/theme";
import styled from "styled-components";
import axios from "axios";
import CoverMap from "./pages/CoverMap";
import Private from "./pages/Private";
import Profile from "./pages/Profile";
axios.defaults.baseURL = "https://bruin-share.herokuapp.com/";

const AppStyle = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <AppStyle>
            <Route path="/" exact component={CoverMap}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/home" exact component={Home}></Route>
            <Route path="/private" exact component={Private}></Route>
            <Route path="/profile" exact component={Profile}></Route>
          </AppStyle>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
