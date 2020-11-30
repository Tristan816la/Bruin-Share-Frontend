import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Popover,
  Paper,
  Typography,
  List,
  ListItem,
  Divider,
  Badge,
} from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ChatIcon from "@material-ui/icons/Chat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useStyles } from "../utils/useStyles";
import CustomButton from "../styled/CustomButton";

function Notification() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [commentMessages, setCommentMessages] = React.useState([]);
  const [likeMessages, setLikeMessages] = React.useState([]);
  const [notifications, setNotifications] = React.useState({});

  const [messages, setMessages] = React.useState(commentMessages);
  const [messageType, setMessageType] = React.useState("comments on");

  const [reload, setReload] = React.useState();
  const [messageLength, setMessageLength] = React.useState(0);

  const open = Boolean(anchorEl);
  const history = useHistory();

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const message = await axios
          .get("/notifications")
          .then((res) => res.data);
        setNotifications(message);
      } catch (err) {
        console.log(err);
      }
    };
    getNotifications();
  }, [reload]);

  useEffect(() => {
    let commentsArray = [];
    let likesArray = [];
    const parseNotifications = async () => {
      notifications.map((message, i) => {
        message.newcomments.map((res1, j) => {
          commentsArray.push({
            topic: message.topic,
            postId: message._id,
            name: res1.commentBy.name,
            commentId: res1._id,
            type: "comment",
          });
        });
        message.newlikes.map((res2, k) => {
          likesArray.push({
            topic: message.topic,
            postId: message._id,
            name: res2.name,
            likeId: res2._id,
            type: "like",
          });
        });
      });
    };
    if (notifications.length) {
      parseNotifications();
      setCommentMessages(commentsArray);
      setLikeMessages(likesArray);
      setMessageLength(commentsArray.length + likesArray.length);
    }
  }, [notifications]);

  useEffect(() => {
    messageType === "comments on"
      ? setMessages(commentMessages)
      : setMessages(likeMessages);
  }, [commentMessages, likeMessages]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMessageType = (event, newType) => {
    setMessageType(newType);
    newType === "comments on"
      ? setMessages(commentMessages)
      : setMessages(likeMessages);
  };

  const handleClickShowPost = (prop) => (event) => {
    try {
      history.push(`/posts/${prop}`);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = (props) => async (event) => {
    if (props.type === "like") {
      try {
        const body = {
          postid: props.postId,
          likeid: props.likeId,
        };
        console.log(body);
        const response = await axios
          .put("/deletenewlike", body)
          .then((res) => res.data);
        setReload(props);
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        const body = {
          postid: props.postId,
          commentid: props.commentId,
        };
        const response = await axios
          .put("/deletenewcomment", body)
          .then((res) => res.data);
        setReload(props);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const MessageList = () => 
  {
    if(messages.length === 0)
    {
      return (
        <List className={classes.messageList}>
          <ListItem className={classes.listItem}>
            {messageType === "comments on" ? 
              "you have no new comments" :
              "you have no new likes"
            }
          </ListItem>
        </List>
      );
    }
    else
      {
        return (
          <List className={classes.messageList}>
                {messages.map((message, i) => (
                    <div key={i}>
                    <ListItem className={classes.listItem}>
                        <div 
                        className={classes.itemText} 
                        onClick={handleClickShowPost(message.postId)}
                        >
                          {`${message.name} ${messageType} your post "${message.topic}"`}
                        </div>
                      <CustomButton tip="Delete">
                        <HighlightOffIcon 
                          className={classes.deleteButton}
                          onClick={handleDelete(message)}
                        />
                      </CustomButton>
                    </ListItem>
                    <Divider/>
                    </div>
                )) } 
              </List>
        );
      }

  return (
    <div>
      
        <CustomButton tip="Notifications" onClick={handleClick}>
          <Badge badgeContent={messageLength} color="primary">
            <NotificationsIcon className={classes.notificationButton} />
          </Badge>
        </CustomButton>
      

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Paper className={classes.notificationDropDown}>
          <MessageList />
          <ToggleButtonGroup
            className={classes.selectButton}
            value={messageType}
            exclusive
            onChange={handleMessageType}
          >
            <ToggleButton
              className={classes.selectComments}
              value="comments on"
            >
              <ChatIcon className={classes.commentButton} />
              <Typography variant="button">Comments</Typography>
            </ToggleButton>
            <ToggleButton className={classes.selectLikes} value="likes">
              <FavoriteBorderIcon className={classes.notificationlikeButton} />
              <Typography variant="button">Likes</Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </Paper>
      </Popover>
    </div>
  );
}

export default Notification;
