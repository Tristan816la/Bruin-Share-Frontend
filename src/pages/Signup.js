import React from "react";
import { Grid, Button, Typography, 
  makeStyles, CssBaseline, Link, Box, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, FormHelperText, TextField } 
  from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) =>({
    page: {
      position: "absolute",
      padding: theme.spacing(3),
      marginRight: "8%",
      marginTop: "5%",
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
const Signup = () => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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

  const validateNotEmpty = (prop) => {
    const expression = /^.+$/;
    return expression.test(prop);
  }

  const validateConfirmPassword = (prop) => {
    const pw = values.password;
    return (prop === pw);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    var validaName = true;
    var validEmail = true;
    var validPassword = true;
    var validConfirmPassword = true;
    if(!validateNotEmpty(values.name)) validaName = false;
    if(!validateEmail(values.email)) validEmail = false;
    if(!validateNotEmpty(values.password)) validPassword = false;
    if(!validateConfirmPassword(values.confirmPassword)) validConfirmPassword = false;
    setErrors({...errors,
                name: (validaName? '' : "This name is not valid"),
                email: (validEmail? '' : "This email address is invalid"),
                password: (validPassword? '' : "This password is not valid"),
                confirmPassword: (validConfirmPassword? '' : "The password does not match")
              });
  }

  return (
    <Box className={classes.page} maxWidth='xs'>
      <CssBaseline /> 
        <div className={classes.paper}>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <FormControl
            className={classes.textField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="name"
            error={errors.name? true: false}
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
            error={errors.email? true: false}
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
            
            <FormControl 
            className={classes.textField} 
            variant="outlined" 
            margin="normal"
            required 
            fullWidth
            error={errors.confirmPassword? true: false}
            name="confirm-password">
              <InputLabel htmlFor="outlined-confirm-password">Confirm Password</InputLabel>
              <OutlinedInput
              id="confirm-password"
              value={values.confirmPassword}
              onChange={handleChange("confirmPassword")}
              type={values.showPassword ? 'text' : 'password'}
              endAdornment={
                <PasswordAdornment>
                </PasswordAdornment>
              }
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
  )
};

export default Signup;
