import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
      contrastText: "#fff",
    },
    secondary: {
      main: pink[500],
    },
  },
});

export default theme;
