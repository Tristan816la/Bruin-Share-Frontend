import React from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Avatar, Box, IconButton } from "@material-ui/core";
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

  const handleClickShowDetails = () => {
    alert("haha");    
  }

  const handleClickShowProfile = () => {
      alert("hihi");
  }


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