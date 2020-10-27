import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import theme from "./styled/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <NavBar></NavBar>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/" exact component={Home}></Route>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
