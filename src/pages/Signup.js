import React from "react";
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
import { useHistory } from "react-router-dom";
const bg = "cover_bg_test3.png";
const useStyles = makeStyles((theme) => ({
  passwordHide: {
    height: "50px",
    paddingRight: "20px",
  },
  signupContainer: {
    display: "flex",
    height: "100vh",
  },
  signupTitle: {
    fontFamily: "Poppins",
    fontWeight: "800",
    fontSize: "30px",
    textAlign: "center",
  },
  signupRight: {
    flex: "4 0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `url(${bg})`,
  },
  signupLeft: {
    flex: "1 0 auto",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    // background: "red",
  },
  signupImg: {
    width: "35vw",
    maxWidth: "800px",
  },
  page: {
    padding: "100px 50px",
    borderRadius: "30px",
    width: "500px",
    flex: "1 0 auto",
  },

  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
const Signup = () => {
  const classes = useStyles();
  const history = useHistory();
  const signupaction = async () => {
    let body = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    try {
      const res = await axios.post("/signup", body);
      console.log(res);
      history.push("/login");
    } catch (err) {
      setErrors({ ...errors, name: err.response.data.error });
    }
  };
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    const expression = /^.{6,}/;
    return expression.test(prop);
  };

  const validateConfirmPassword = (prop) => {
    const pw = values.password;
    return prop === pw;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let validName = true;
    let validEmail = true;
    let validPassword = true;
    let validConfirmPassword = true;
    if (values.name === "") validName = false;
    if (!validateEmail(values.email)) validEmail = false;
    if (!validatePassword(values.password)) validPassword = false;
    if (!validateConfirmPassword(values.confirmPassword))
      validConfirmPassword = false;
    setErrors({
      ...errors,
      name: validName ? "" : "Please enter a name",
      email: validEmail ? "" : "This email address is invalid",
      password: validPassword ? "" : "You have to enter at least 6 characters",
      confirmPassword: validConfirmPassword ? "" : "Password does not match",
    });
    if (validEmail && validName && validPassword && validConfirmPassword) {
      signupaction();
    }
  };

  return (
    <div className={classes.signupContainer}>
      <div className={classes.signupLeft}>
        <Box className={classes.page} maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography className={classes.signupTitle}>
              Join Our Community & <br />
              Sign Up
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit} noValidate>
              <FormControl
                className={classes.textField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="name"
                error={errors.name ? true : false}
              >
                <InputLabel htmlFor="Name">Name</InputLabel>
                <OutlinedInput
                  id="name"
                  autoFocus
                  value={values.name}
                  onChange={handleChange("name")}
                  labelWidth={51}
                />
                <FormHelperText>{errors.name}</FormHelperText>
              </FormControl>

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
                  id="email"
                  value={values.email}
                  onChange={handleChange("email")}
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

              <FormControl
                className={classes.textField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                error={errors.confirmPassword ? true : false}
                name="confirm-password"
              >
                <InputLabel htmlFor="outlined-confirm-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="confirm-password"
                  value={values.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  type={values.showPassword ? "text" : "password"}
                  endAdornment={<PasswordAdornment></PasswordAdornment>}
                  labelWidth={141}
                />
                <FormHelperText>{errors.confirmPassword}</FormHelperText>
              </FormControl>

              <Grid item>
                <Typography align="center">
                  <Link href="./Login" variant="body2">
                    {"Already signed up? Click here to log in."}
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
                    Join now
                  </Button>
                </Typography>
              </Grid>
            </form>
          </div>
        </Box>
      </div>

      <div className={classes.signupRight}>
        <img
          src="cover_test3.svg"
          alt="signupcover"
          className={classes.signupImg}
        ></img>
      </div>
    </div>
  );
};

export default Signup;
