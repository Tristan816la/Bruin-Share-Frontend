import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import theme from "./styled/theme";
import styled from "styled-components";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";

const AppStyle = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <AppStyle>
            {/* <NavBar></NavBar> */}
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/" exact component={Home}></Route>
          </AppStyle>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
