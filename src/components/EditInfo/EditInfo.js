import React, { useEffect } from 'react';
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
//import { SettingsInputSvideoRounded, SettingsSystemDaydream } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function EditInfo( { currentname, currentemail }) {
  const [open, setOpen] = React.useState(false);
  const [name, setUsername] = React.useState(currentname); 
  const [email, setUseremail] = React.useState(currentemail); 
  const [errors, setErrors] = React.useState({});
  const classes = useStyles(); 

  useEffect(() => {
      setUsername(currentname); 
      setUseremail(currentemail);
  }, [currentname, currentemail]); 

  //console.log(currentname, currentemail);
  //console.log(name, email);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNameChange = e => {
    setUsername(e.target.value); 
  };

  const handleEmailChange = e => {
    setUseremail(e.target.value); 
  };

  const validateEmail = (prop) => {
    const expression = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    return expression.test(prop);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validName = true; 
    let validEmail = validateEmail(email); 
    if (name === "") validName = false; 
    setErrors({
      ...errors,
      name: validName ? "" : "Your name can't be empty",
      email: validEmail ? "" : "This email address is invalid",
    });
    //console.log(validName); 
    //console.log(validEmail); 
    //console.log(email);

    if (validName && validEmail) {
      editAction();
    } 
  };

  const editAction = async() => {
    const newInfo = {
      name, 
      email,
    }; 
    try {
      //console.log("run");
      await axios.put("/updateprofile", newInfo); 
      
      handleClose(); 
      window.location.reload(); 
    } catch (err) {
      console.error(err);
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
             
          <form className={classes.root} noValidate autoComplete="off">
            <FormControl variant="outlined" margin="dense">
              <InputLabel htmlFor="component-outlined">Name</InputLabel>
              <OutlinedInput id="component-outlined" defaultValue={name} onChange={handleNameChange} label="Name" />
           </FormControl>
          </form>

          <form className={classes.root} noValidate autoComplete="off">
            <FormControl variant="outlined" margin="dense">
              <InputLabel htmlFor="component-outlined">Email</InputLabel>
              <OutlinedInput id="component-outlined" defaultValue={email} onChange={handleEmailChange} label="Email" />
            </FormControl>
          </form>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Confirm Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditInfo;