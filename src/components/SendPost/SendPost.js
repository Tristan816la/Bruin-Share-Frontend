import React, { useState, useEffect } from "react";
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
import CreateIcon from "@material-ui/icons/Create";

import { isLoggedIn } from "../../utils/LoginActions";
import axios from "axios";
import { useStyles } from "../../utils/useStyles";
import CustomButton from "../../styled/CustomButton";
import { Tooltip } from "@material-ui/core";

const MultilineTextFields = ({ onChange }) => {
  const classes = useStyles();

  return (
    <form className={classes.sendPostBox} noValidate autoComplete="off">
      <div>
        <TextField
          label="Your Post"
          multiline
          variant="outlined"
          rows={5}
          onChange={(e) => onChange(e)}
          fullWidth
        />
      </div>
    </form>
  );
};

export default function SendPost() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  const [content, setContent] = useState("");
  const [topic, setTopic] = useState("");
  const [lat, setLat] = useState("34.068920");
  const [lng, setLng] = useState("-118.445183");

  useEffect(() => {
    const getLocation = async () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          console.error("Fail to get location");
        }
      );
    };
    getLocation();
  }, [lat, lng]);

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
    const body = {
      topic,
      content,
      lat,
      lng,
    };
    try {
      await axios.post("/createpost", body);
      handleClose();
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    loggedIn && (
      <div>
        <CustomButton tip="Create a new Post!" onClick={handleClickOpen}>
          <CreateIcon />
        </CustomButton>

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
              className={classes.sendPostTopic}
            />

            <MultilineTextFields onChange={handleContentChange} />
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
