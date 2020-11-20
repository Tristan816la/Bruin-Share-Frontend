import React from 'react';
import { 
    makeStyles, 
    Popover, 
    Paper,  
    Typography,
    List,
    ListItem,
    Divider,
    Link
} from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ChatIcon from "@material-ui/icons/Chat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import NotificationsIcon from "@material-ui/icons/Notifications";
import theme from '../styled/theme';
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  notificationButton: {
    color: "#666",
    cursor: "pointer",
  },
  selectButton: {
    display: "flex",
    flexDirection: "row",
    width: "300px"
  },
  selectComments: {
    flex: "50%"
  },
  selectLikes: {
    flex: "50%"
  },
  commentButton: {
    marginRight: "1vh"
  },
  likeButton: {
    marginRight: "2vh"
  },
  MessageList: {
    margin: theme.spacing(1, 0, 0)
  },
  listItem:{
    color: "#666",
    cursor: "pointer",
  }
}));



function Notification(props){
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const [messageType, setMessageType] = React.useState(
        "comments on"
    );
  
    const handleMessageType = (event, newType) => {
      setMessageType(newType);
      (newType === "comments on") ? 
        setMessages(commentMessage) : setMessages(likeMessage);
    };
  
    const commentMessage = [{name: "One", time: "t"}, {name: "Two", time: "s"}];
    const likeMessage = [{name: "haha", time: "z"}, {name: "hihi", time: "w"}];
    const [messages, setMessages] = React.useState(commentMessage);


    return (
      <div>
          <NotificationsIcon
          className={classes.notificationButton}
          onClick={handleClick}
        />
        
    
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <Paper >
            <ToggleButtonGroup
              className={classes.selectButton}
              value={messageType}
              exclusive
              onChange={handleMessageType}
            >
              <ToggleButton className={classes.selectComments} value="comments on">
                <ChatIcon className={classes.commentButton}/>
                <Typography variant="button">Comments</Typography>
              </ToggleButton>
              <ToggleButton className={classes.selectLikes} value="likes">
                <FavoriteBorderIcon className={classes.likeButton}/>
                <Typography variant="button">Likes</Typography>
              </ToggleButton>
            </ToggleButtonGroup>
            <List className={classes.MessageList}>
              {
                messages.map((message, i) => 
                <>
                <ListItem>
                  <Link className={classes.listItem} color="primary" underline='none'>
                    <div>{`${message.name} ${messageType} your post`}</div>
                  </Link>
                </ListItem>
                <Divider />
                </>)
              }
            </List>
          </Paper>
        </Popover>
      </div>
    )
}

export default Notification;