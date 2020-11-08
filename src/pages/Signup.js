import React from "react";
import { Container, Grid, Button, Typography, 
  makeStyles, CssBaseline, TextField, Link } 
  from "@material-ui/core";
import './Signup.css'

const useStyles = makeStyles((theme) =>({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    form:{
      width: '100%',
      marginTop: theme.spacing(1),
    },

    submit: {
      margin: theme.spacing(3, 0, 2)
    }
}));
const Signup = () => {
  const classes = useStyles();

  return (
    <Container className='form' maxWidth='xs'>
      <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form}>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
            />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
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
              <Link href="./Login" variant="body2">
                {"Already signed up? Click here to log in."}
              </Link>
            </Typography>
          </Grid>
          <Button
            className={classes.submit}
            variant="contained"
            fullWidth
            type="submit"
            //return form to the server
          >
            {"Join now"}
          </Button>
          </form>
        </div>
    </Container>
  )
};

export default Signup;
