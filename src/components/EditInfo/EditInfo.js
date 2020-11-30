import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import "./EditInfo.css"
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function NameTextField( { username }) {
  const [name, setName] = React.useState({username});
  const classes = useStyles();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl variant="outlined" margin="dense">
        <InputLabel htmlFor="component-outlined">Name</InputLabel>
        <OutlinedInput id="component-outlined" defaultValue={username} onChange={handleChange} label="Name" />
      </FormControl>
    </form>
  );
}

function EmailTextField( { useremail }) {
  const [email, setEmail] = React.useState({useremail});
  const classes = useStyles();

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = (prop) => {
    const expression = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    return expression.test(prop);
  };


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl variant="outlined" margin="dense">
        <InputLabel htmlFor="component-outlined">Email</InputLabel>
        <OutlinedInput id="component-outlined" value={useremail} onChange={handleChange} label="Email" />
      </FormControl>
    </form>
  );
}



function EditInfo( { name, email }) {
  const [open, setOpen] = React.useState(false);
  const [username, setUserame] = React.useState({name}); 
  const [useremail, setUseremail] = React.useState({email}); 
  const [errors, setErrors] = React.useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNameChange = e => {
    setUserame(e.target.value); 
  };

  const handleEmailChange = e => {
    setUseremail(e.target.value); 
  };

  const validateEmail = (prop) => {
    const expression = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    return expression.test(prop);
  };

  const handleSubmit = async() => {
    let validName = true; 
    let validEmail = true; 
    if (username === "") validName = false; 
    if (!validateEmail(useremail)) validEmail = false; 
    setErrors({
      ...errors,
      name: validName ? "" : "Please enter a name",
      email: validEmail ? "" : "This email address is invalid",
    });
    if (validName && validEmail) {
      const newInfo = {
        username, 
        useremail,
      }; 
      try {
        await axios.put("/updateprofile", newInfo); 
        handleClose(); 
        window.location.reload(); 
      } catch (err) {
        console.error(err); 
      }
    } 
  };

  return (
    <div>
      <Button variant="outlined"  onClick={handleClickOpen} className="edit_button">
        Edit Info
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Info</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To update your personal information, please fill in the forms below.
          </DialogContentText>
             
        <NameTextField username={name} onChange={handleNameChange}/> 
        <EmailTextField useremail={email} onChange={handleEmailChange}/>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Confirm Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditInfo;