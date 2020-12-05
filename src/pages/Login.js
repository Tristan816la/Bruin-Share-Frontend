import React, { useEffect } from "react";

// MUI
import {
  Grid,
  Button,
  Typography,
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

// Utils
import axios from "axios";
import { useHistory } from "react-router-dom";
import { isLoggedIn } from "../utils/LoginActions";
import { useStyles } from "../utils/useStyles";

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    if (isLoggedIn()) {
      history.push("/home");
    }
  }, [history]);

  const loginaction = async () => {
    try {
      const body = {
        email: values.email,
        password: values.password,
      };
      const res = await axios.post("/login", body);
      window.localStorage.setItem("AuthToken", `Bearer ${res.data.mytoken}`);
      window.localStorage.setItem("UserId", res.data.userinfo._id);
      window.localStorage.setItem("UserImage", res.data.userinfo.image);
      window.location.reload(); // Add this because Nav bar needs to rerender
      history.push("/home");
    } catch (err) {
      const errorText = err.response.data.error;
      if (errorText === "Invalid Email!")
        setErrors({ ...errors, email: errorText });
      else if (errorText === "Invalid password!")
        setErrors({ ...errors, password: errorText });
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
    const expression = /^.{4,}$/;
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
      password: validPassword ? "" : "You have to enter at least 4 characters",
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
            {"Login to Your Account &"}<br />
            {"Share Your Story"}
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
                <InputLabel htmlFor="Email-Address">Email Address</InputLabel>
                <OutlinedInput
                  autoFocus
                  id="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  labelWidth={126}
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
                  labelWidth={88}
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
