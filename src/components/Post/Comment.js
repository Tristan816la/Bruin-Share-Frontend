import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import commentIcon from "@material-ui/icons/Message";
import SendIcon from "@material-ui/icons/Send";

import { useStyles } from "../../utils/useStyles";
import CustomButton from "../../styled/CustomButton";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Card,
  TextField,
  Typography,
  Avatar,
} from "@material-ui/core/";
import CloseIcon from "@material-ui/icons/Close";
import SeparateLine from "../../styled/SeparateLine";
import { isLoggedIn } from "../../utils/LoginActions";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Comment = ({ comments, content, postId, postImage, postBy }) => {
  const [open, setOpen] = useState(false);
  const [commenttext, setCommenttext] = useState("");
  const history = useHistory();
  const classes = useStyles();
  let displayComments = [...comments];
  if (displayComments.length > 5) {
    displayComments = displayComments.slice(-5);
  }
  const handleOpen = () => {
    if (isLoggedIn()) {
      setOpen(true);
    } else {
      history.push("/login");
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOnChange = (e) => {
    setCommenttext(e.target.value);
    console.log(commenttext);
  };

  const handleSubmit = async () => {
    const body = {
      postid: postId,
      comment: commenttext,
    };
    try {
      await axios.put("/comment", body);
      handleClose();
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <CustomButton tip="comment" onClick={handleOpen}>
        <Icon component={commentIcon}></Icon>
      </CustomButton>
      <Typography className={classes.likecommenttext}>
        {comments.length}
      </Typography>

      <Dialog open={open} onClose={handleClose}>
        <div style={{ display: "flex", width: "600px" }}>
          <DialogTitle>Replying to Post...</DialogTitle>
          <CustomButton
            tip="close"
            className={classes.closebtn}
            onClick={handleClose}
          >
            <CloseIcon></CloseIcon>
          </CustomButton>
        </div>
        <DialogContent>
          <Card className={classes.commentPostCard}>
            <Avatar
              src={postImage}
              className={classes.commentPostImage}
            ></Avatar>
            <Typography className={classes.commentPostPostBy}>
              {postBy}:
            </Typography>
            <Typography className={classes.commentPostContent}>
              {content}
            </Typography>
          </Card>
        </DialogContent>

        <DialogContent>
          {displayComments.map((c, i) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
              key={i}
            >
              <img
                src={c.commentBy.image}
                className={classes.commentIcon}
                alt="commentIcon"
              />
              <Card key={i} className={classes.commentCard} variant="outlined">
                {c.text}
              </Card>
            </div>
          ))}

          <SeparateLine />
          <div style={{ display: "flex" }}>
            <CustomButton
              tip="Go to setting page"
              className={classes.userImage}
            >
              <Avatar
                src={window.localStorage.getItem("UserImage")}
                alt="user image"
              ></Avatar>
            </CustomButton>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="New Comment"
              fullWidth
              onChange={(e) => handleOnChange(e)}
            />
            <CustomButton
              tip="send"
              className={classes.sendbtn}
              onClick={handleSubmit}
            >
              <SendIcon />
            </CustomButton>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Comment;
