import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import unlikeIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";
import likeIcon from "@material-ui/icons/Favorite";
import { Typography } from "@material-ui/core";
import { useStyles } from "../../utils/useStyles";
import CustomButton from "../../styled/CustomButton";
import { getUserId } from "../../utils/UserAction";
import axios from "axios";

const Like = ({ likes, postId }) => {
  const classes = useStyles();
  const [likeCount, setLikeCount] = useState(likes.length);
  const [liked, setLiked] = useState(() => {
    if (likes.length) {
      let likeIds = likes.map((like) => like._id);
      return likeIds.includes(getUserId());
    }
  });

  const likePost = async () => {
    try {
      const body = {
        postid: postId,
      };
      const data = await axios.put("/like", body);
      setLiked(true);
      setLikeCount(likeCount + 1);
    } catch (err) {
      console.error(err);
    }
  };

  const unlikePost = async () => {
    try {
      const body = {
        postid: postId,
      };
      const data = await axios.put("/unlike", body);
      setLiked(false);
      setLikeCount(likeCount - 1);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {!liked ? (
        <CustomButton tip="like">
          <Icon
            component={unlikeIcon}
            className={classes.iconbtn}
            onClick={likePost}
          />
        </CustomButton>
      ) : (
        <CustomButton tip="unlike">
          <Icon
            component={likeIcon}
            className={classes.iconbtn}
            onClick={unlikePost}
          ></Icon>
        </CustomButton>
      )}
      <Typography className={classes.likecommenttext}>{likeCount}</Typography>
    </>
  );
};

export default Like;
