import React, { useEffect, useState } from "react";
import moment from "moment";
import { Grid, Typography, Avatar, Box, IconButton } from "@material-ui/core";
<<<<<<< HEAD
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const useStyles = makeStyles((theme) => ({
    post: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(2),
        borderRadius: "30px",
        width: "269px",
        height: "362px",
        border: "1px solid #000000"
    },
    title: {
        display: "flex",
        flexDirection: "row",
        
        margin: theme.spacing(1, 0, 1),
    },
    profile: {
        padding: theme.spacing(0, 1, 0),
    },
    contentBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(2),
        borderRadius: "20px",
        width: "220px",
        height: "225px",
        border: "1px solid #000000", 
        margin: theme.spacing(1, 0, 1),
        overflow: "hidden"
    },
    content: {
        overflowWrap: 'break-word',
    },
    bottom: {
        display: "grid",
        gridTemplateColumns: "1fr 5fr",
        gridColumnGap: "7em"
    }
  }));
=======
import Like from "./Post/Like";
import Comment from "./Post/Comment";
import { useStyles } from "../utils/useStyles";
import CustomButton from "../styled/CustomButton";

const handleClickShowDetails = () => {
  alert("haha");
};

>>>>>>> main

const handleClickShowProfile = () => {
  alert("hihi");
};


<<<<<<< HEAD

  function MainStoryBox(props) {
    const classes = useStyles();
    const [post, setPost] = React.useState({
        title: "",
        name: "",
        content: "",
        time: "",
        likes: ""
      });
    
    // setPost({
    //     title: props.title,
    //     name: props.name,
    //     content: props.content,
    //     time: props.time,
    //     likes: props.likes
    // })
    return(
        <Box className={classes.post}>
            <Grid className={classes.title} container >
                <Grid item>
                    <IconButton className={classes.profile} onClick={handleClickShowProfile}><Avatar>{props.name[0]}</Avatar></IconButton>
                </Grid>
                <Grid item xs zeroMinWidth onClick={handleClickShowDetails}>
                <Typography noWrap variant="h6">{props.title}</Typography>
                </Grid>
            </Grid>
            <Box className={classes.contentBox} onClick={handleClickShowDetails} >
                <Grid container> 
                    <Grid item xs >
                        <Typography className={classes.content}>{props.content}</Typography>  
                    </Grid>
                </Grid>
            </Box>
            <div className={classes.bottom}>
                <ThumbUpAltIcon />
                <Typography  variant="caption">{moment(props.time).format(" MMM DD YYYY, h:mm a")}</Typography>
            </div>
        </Box>
       
    )
  }

  export default MainStoryBox;
=======
const MainStoryBox = ({
  name,
  title,
  content,
  time,
  comments,
  likes,
  id,
  image,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.post}>
      <Grid className={classes.title} container>
        <Grid item>
          <CustomButton
            className={classes.profile}
            onClick={handleClickShowProfile}
            tip={name}
          >
            <Avatar src={image} alt="postby image"></Avatar>
          </CustomButton>
        </Grid>
        <Grid item xs zeroMinWidth onClick={handleClickShowDetails}>
          <Typography noWrap variant="h6">
            {title}
          </Typography>
        </Grid>
      </Grid>
      <Box className={classes.contentBox} onClick={handleClickShowDetails}>
        <Grid container>
          <Grid item xs>
            <Typography className={classes.content}>{content}</Typography>
          </Grid>
          <Typography className={classes.time} variant="caption">
            {moment(time).fromNow()}
          </Typography>
        </Grid>
      </Box>
      <Box className={classes.likeComment}>
        <Grid container>
          <Grid item xs container>
            <Like likes={likes} postId={id}></Like>
          </Grid>
          <Grid item xs container>
            <Comment
              comments={comments}
              content={content}
              postId={id}
              postImage={image}
              postBy={name}
            ></Comment>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MainStoryBox;
>>>>>>> main
