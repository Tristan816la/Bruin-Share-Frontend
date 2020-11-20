import React from "react";
import "./SendPost.css";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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
            Life these days have not been easy. The COVID-19 pandemic has impacted every Bruin's live. Share your story and let us get through it together. 
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Your Post"
              fullWidth
              multiline
            />
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