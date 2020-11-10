import React from "react";
import { Grid, Button, Typography, 
  makeStyles, CssBaseline, Link, Box, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, FormHelperText, TextField } 
  from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
    page: {
      position: "absolute",
      padding: theme.spacing(3),
      marginRight: "8%",
      marginTop: "12%",
      marginLeft: "60%", 
      borderRadius: "30px",
      backgroundColor: "lightBlue"
    },

    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },

    form:{
      width: '100%',
      marginTop: theme.spacing(2),
      
    },

    textField: {
      margin: theme.spacing(2, 0, 2)
    },

    submit: {
      margin: theme.spacing(3, 0, 2),
      width: "60%"
    }
}));

//spacing larger
//confirm password, error -> box red, textfield attribute
//button smaller

const Login = () => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false
  });
  
  const [errors, setErrors] = React.useState({})

  

  const handleChange = (prop) => (event) => {
    setValues({...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const PasswordAdornment = () => {
    return(
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
          >
          {values.showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
    </InputAdornment>
    )
  }

  const validateEmail = (prop) => {
    const expression = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    return expression.test(prop);
  }

  const validatePassword = (prop) => {
    const expression = /^.{6,}$/;
    return expression.test(prop);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    var validEmail = true;
    var validPassword = true;
    if(!validateEmail(values.email)) validEmail = false;
    if(!validatePassword(values.password)) validPassword = false;
    setErrors({...errors,
                email: (validEmail? '' : "This email address is invalid"),
                password: (validPassword? '' : "You have to enter at least 6 characters")});
  }

  return (
    <Box className={classes.page} maxWidth='xs'>
      <CssBaseline/>
        <div className={classes.paper}>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <FormControl
            className={classes.textField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            error={errors.email? true: false}
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
            error={errors.password? true: false}
            name="password">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
              id="password"
              value={values.password}
              onChange={handleChange("password")}
              type={values.showPassword ? 'text' : 'password'}
              endAdornment={
                <PasswordAdornment>
                </PasswordAdornment>
              }
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
  )
};

export default Login;
