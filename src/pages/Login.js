import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Button,
  Typography,
  makeStyles,
  CssBaseline,
  Link,
  Box,
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import axios from "axios";

const bg = "cover_bg_test2.png";

const useStyles = makeStyles((theme) => ({
  passwordHide: {
    height: "50px",
    paddingRight: "20px",
  },
  loginContainer: {
    display: "flex",
    height: "100vh",
  },
  loginTitle: {
    fontFamily: "Poppins",
    fontWeight: "800",
    fontSize: "30px",
    textAlign: "center",
  },
  loginLeft: {
    justifyContent: "center",
    background: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(${bg}) fixed center center no-repeat`,
    backgroundSize: "cover",
    flex: "2 0 auto",
    display: "flex",
    alignItems: "center",
  },
  loginRight: {
    flex: "1 0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  coverImg: {
    width: "35vw",
    maxWidth: "800px",
  },
  page: {
    padding: "100px 50px",
    borderRadius: "30px",
    width: "500px",
  },

  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px 10px",
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(2),
  },

  textField: {
    margin: theme.spacing(4, 0, 2),
  },

  submit: {
    margin: theme.spacing(6, 0, 2),
    width: "60%",
  },
}));

//spacing larger
//confirm password, error -> box red, textfield attribute
//button smaller

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  console.log(history);
  useEffect(() => {
    if (window.localStorage.getItem("AuthToken")) {
      history.push("/home");
    }
  }, [history]);

  const loginaction = async () => {
    let body = {
      email: values.email,
      password: values.password,
    };
    try {
      const res = await axios.post("/login", body);
      window.localStorage.setItem("AuthToken", `Bearer ${res.data.mytoken}`);
      history.push("/home");
    } catch (err) {
      console.error(err);
    }
  };

  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [errors, setErrors] = React.useState({});

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const PasswordAdornment = () => {
    return (
      <InputAdornment position="end" className={classes.passwordHide}>
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {values.showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    );
  };

  const validateEmail = (prop) => {
    const expression = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    return expression.test(prop);
  };

  const validatePassword = (prop) => {
    const expression = /^.{6,}$/;
    return expression.test(prop);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let validEmail = true;
    let validPassword = true;
    if (!validateEmail(values.email)) validEmail = false;
    if (!validatePassword(values.password)) validPassword = false;
    setErrors({
      ...errors,
      email: validEmail ? "" : "This email address is invalid",
      password: validPassword ? "" : "You have to enter at least 6 characters",
    });
    if (validEmail && validPassword) loginaction();
  };

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginLeft}>
        <img
          src="cover_test2.svg"
          alt="coverimg"
          className={classes.coverImg}
        ></img>
      </div>
      <div className={classes.loginRight}>
        <Box className={classes.page} maxWidth="xs">
          <CssBaseline />
          <Typography className={classes.loginTitle}>
            Login to Your Account &<br></br> Share Your Story
          </Typography>
          <div className={classes.paper}>
            <form className={classes.form} onSubmit={handleSubmit} noValidate>
              <FormControl
                className={classes.textField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="email"
                error={errors.email ? true : false}
              >
                {console.log(errors.email)}
                <InputLabel htmlFor="Email-Address">Email Address</InputLabel>
                <OutlinedInput
                  autoFocus
                  id="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  // type="email"
                  labelWidth={112}
                />
                <FormHelperText>{errors.email}</FormHelperText>
              </FormControl>

              <FormControl
                className={classes.textField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                error={errors.password ? true : false}
                name="password"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="password"
                  value={values.password}
                  onChange={handleChange("password")}
                  type={values.showPassword ? "text" : "password"}
                  endAdornment={<PasswordAdornment></PasswordAdornment>}
                  labelWidth={80}
                />
                <FormHelperText>{errors.password}</FormHelperText>
              </FormControl>

              <Grid item>
                <Typography align="center">
                  <Link href="./Signup" variant="body2">
                    {"Don’t have an account yet? Click here to sign up. "}
                  </Link>
                </Typography>
              </Grid>

              <Grid item>
                <Typography align="center">
                  <Button
                    className={classes.submit}
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"

                    //return form back to the server
                  >
                    Log in
                  </Button>
                </Typography>
              </Grid>
            </form>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Login;
