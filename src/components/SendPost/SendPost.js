import React from "react";
import "./SendPost.css";

import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '65ch',
    },
  },
}));


const MultilineTextFields = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-textarea"
          label="Your Post"
          multiline
          variant="outlined"
          rows={5}
        />
      </div>
    </form>
  );
}

export default function SendPost() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Fab className='fab' color="primary" aria-label="add" onClick={handleClickOpen}>
            <AddIcon />
        </Fab>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
              Make Your Post
          </DialogTitle>
          <DialogContent>

            <DialogContentText>
            Life these days have not been easy. The COVID-19 pandemic has impacted every Bruin's live. Share your story and let us get it through together. 
            </DialogContentText>

            <MultilineTextFields/>

          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Post
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }