import React from "react";
import { Container, Grid, Button, Typography, 
  makeStyles, CssBaseline, TextField, Link, Box } 
  from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    page: {
      position: "absolute",
      padding: theme.spacing(3),
      marginRight: "5%",
      marginTop: "10%",
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

    submit: {
      margin: theme.spacing(3, 0, 2)
    }
}));
const Login = () => {
  const classes = useStyles();

  return (
    <Box className={classes.page} maxWidth='xs'>
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
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            //return form back to the server
          >
            Log in
          </Button>
          </form>
        </div>
    </Box>
  )
};

export default Login;
