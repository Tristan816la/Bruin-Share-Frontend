import React from "react";
import { Container, Grid, Button, Typography, 
  makeStyles, CssBaseline, TextField, Link } 
  from "@material-ui/core";
import './Signup.css'
const useStyles = makeStyles((theme) => ({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },

    form:{
      width: '100%',
      marginTop: theme.spacing(3),
    },

    submit: {
      margin: theme.spacing(3, 0, 2)
    }
}));
const Login = () => {
  const classes = useStyles();

  return (
    <Container className='form' maxWidth='xs'>
      <CssBaseline/>
        <div className={classes.paper}>
          <form className={classes.form}>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            id="email"
            label="Email Address"
            name="email"
            type="email"
            />
            <TextField 
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            />

          <Grid item>
            <Typography align="center">
              <Link href="./Signup" variant="body2">
                {"Don’t have an account yet? Click here to sign up. "}
              </Link>
            </Typography>
          </Grid>

          <Button
            className={classes.submit}
            variant="contained"
            fullWidth
            type="submit"
            //return form back to the server
          >
            Log in
          </Button>
          </form>
        </div>
    </Container>
  )
};

export default Login;
