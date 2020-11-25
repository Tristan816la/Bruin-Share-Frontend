import React from "react";
import {
  makeStyles,
  Popover,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Link,
} from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ChatIcon from "@material-ui/icons/Chat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useStyles } from "../utils/useStyles";
import CustomButton from "../styled/CustomButton";

function Notification(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const [messageType, setMessageType] = React.useState("comments on");

  const handleMessageType = (event, newType) => {
    setMessageType(newType);
    newType === "comments on"
      ? setMessages(commentMessage)
      : setMessages(likeMessage);
  };

  const commentMessage = [
    { name: "One", time: "t" },
    { name: "Two", time: "s" },
    { name: "Three", time: "r" },
  ];
  const likeMessage = [
    { name: "haha", time: "z" },
    { name: "hihi", time: "w" },
  ];
  const [messages, setMessages] = React.useState(commentMessage);

  return (
    <div>
      <CustomButton tip="Notifications">
        <NotificationsIcon
          className={classes.notificationButton}
          onClick={handleClick}
        />
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
        <Paper>
          <List className={classes.MessageList}>
            {messages.map((message, i) => (
              <>
                <ListItem key={i}>
                  <Link
                    className={classes.listItem}
                    color="primary"
                    underline="none"
                  >
                    <div>{`${message.name} ${messageType} your post`}</div>
                  </Link>
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
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
