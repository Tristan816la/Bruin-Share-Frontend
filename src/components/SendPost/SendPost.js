import React, { useState } from "react";
import "./SendPost.css";


import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Typography } from "@material-ui/core";

import { isLoggedIn } from "../../utils/LoginActions";
import axios from "axios";
import SeparateLine from "../../styled/SeparateLine";
import { useStyles } from "../../utils/useStyles";








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
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  const [content, setContent] = useState("");
  const [topic, setTopic] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTitleChange = (e) => {
    setTopic(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      const body = {
        topic,
        content,
      };
      console.log(axios.defaults);
      const data = await axios.post("/createpost", body);
      handleClose();
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    loggedIn && (
      <div>
        <Fab
          className="fab"
          color="primary"
          aria-label="add"
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Fab>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Make Your Post</DialogTitle>
          <DialogContentText className={classes.dialogDescription}>
            Life these days have not been easy. The COVID-19 pandemic has
            impacted every Bruin's live. Share your story and let us get through
            it together.
          </DialogContentText>
          <DialogContent>

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Topic:"
              multiline
              onChange={(e) => handleTitleChange(e)}
            />
          


            <DialogContentText>
            Life these days have not been easy. The COVID-19 pandemic has impacted every Bruin's live. Share your story and let us get it through together. 
            </DialogContentText>

            <MultilineTextFields/>


          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Post
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  );
}
