import React, { useState } from "react";
import CustomButton from "../../styled/CustomButton";
import {
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";

import CreateIcon from "@material-ui/icons/Create";
import { useStyles } from "../../utils/useStyles";
import axios from "axios";
import MultilineTextFields from "../../styled/MultilineTextField";
import "../../App.css"
const EditPost = ({ topic, content, postid }) => {
  const [open, setOpen] = useState(false);
  const [editContent, setEditContent] = useState(content);
  const [editTopic, setEditTopic] = useState(topic);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleContentChange = (e) => {
    setEditContent(e.target.value);
  };

  const handleTitleChange = (e) => {
    setEditTopic(e.target.value);
  };

  const handleEdit = async () => {
    const body = {
      topic: editTopic,
      content: editContent,
    };
    try {
      await axios.put(`/updatepost/${postid}`, body);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <CustomButton tip="Edit Your Post" onClick={handleClickOpen}>
        <CreateIcon />
      </CustomButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Change Your Post</DialogTitle>
        <DialogContentText className={classes.dialogDescription}>
          Life these days have not been easy. The COVID-19 pandemic has impacted
          every Bruin's live. Share your story and let us get through it
          together.
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
            value={editTopic}
          />
          <MultilineTextFields className="postcontent"
            onChange={handleContentChange}
            value={editContent}
          ></MultilineTextFields>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEdit} color="primary">
            Change
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditPost;
