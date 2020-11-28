import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import EditPost from "../components/Post/EditPost";

// MUI
import { Avatar, Typography, Button, TextField } from "@material-ui/core";

// Utils
import axios from "axios";
import moment from "moment";
import { isLoggedIn } from "../utils/LoginActions";
import { useParams, useHistory } from "react-router-dom";
import { getUserImage, getUserId } from "../utils/UserAction";

// Backgrounds
import phone from "../components/Post/phone.png";
import laptop from "../components/Post/laptop.png";
import postBg from "../components/Post/postBg.png";
import CustomButton from "../styled/CustomButton";
import { Edit, Delete, Notifications } from "@material-ui/icons";

export const PostWrapper = styled.div`
  position: absolute;
  top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45vw;
  position: relative;
`;

export const UserAvatar = styled(Avatar)`
  width: 8vw;
  height: 8vw;
  grid-row: 1 / 3;
  grid-column: 1 / 2;
`;

export const PostHeader = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr;
  width: 45vw;
  margin-left: 15px;
  height: 25vh;
`;
export const ClickableTypography = styled(Typography)`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const SubtitleWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2;
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: start;
  align-items: center;
`;

export const TimeWrapper = styled(Typography)`
  justify-self: flex-end;
`;

export const PostBg = styled.img`
  width: 100vw;
  height: 80vh;
  bottom: 0;
  position: fixed;
  opacity: 0.8;
  z-index: -1;
`;

export const LaptopBg = styled.img`
  position: fixed;
  z-index: -1;
  width: 16vw;
  left: 3vw;
  bottom: 0;
`;

export const PhoneBg = styled.img`
  position: fixed;
  z-index: -1;
  width: 16vw;
  right: 1.5vw;
  bottom: -2vh;
`;

export const PostContent = styled(Typography)`
  position: absolute;
  left: 1vw;
  top: 20vh;
`;

export const PostButton = styled(Button)`
  background: #fafafa;
  align-self: flex-end;
  border: 1px solid silver;
  text-transform: uppercase;
  border-radius: 5px;
  width: 120px;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    background-color: white;
  }
`;
export const LikeButton = styled(PostButton)`
  margin-top: 10vh;
  margin-right: -0.5vw;
`;
export const CommentWrapper = styled.div`
  display: flex;
  margin-top: 25px;
  width: inherit;
  gap: 30px;
`;
export const CurAvatar = styled(Avatar)`
  width: 4vw;
  height: 4vw;
  align-self: flex-start;
`;
export const CommentField = styled(TextField)`
  width: 50vw;
  align-self: center;
`;
export const CommentsWrapper = styled.div`
  margin-top: 10vh;
`;

export const CommentBtnWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: 10px;
  gap: 40px;
`;

export const CommentCard = styled.div`
  /* background: red; */
  width: 45vw;
  align-self: center;
  display: flex;
  gap: 30px;
  margin-top: 40px;
`;

export const CommentTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EditWrapper = styled.div`
  position: absolute;
  display: flex;
  right: 1vw;
  top: 1vh;
`;

export const CommentText = styled(Typography)``;

const Post = () => {
  const postid = useParams().postId;
  const [post, setPost] = useState({});
  const [curComment, setCurComment] = useState("");
  const [liked, setLiked] = useState(false);
  // TODO: Delete Post
  const history = useHistory();

  // Get the specific post
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/post/${postid}`);
        setPost(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPost();
    if (post._id) {
      const likeIds = post.likes.map((like) => like._id);
      if (likeIds.includes(getUserId())) {
        setLiked(true);
      }
    }
  }, []);

  const handleOnChange = (e) => {
    setCurComment(e.target.value);
  };
  const handleClear = () => {
    setCurComment("");
  };
  const handleSend = async () => {
    const body = {
      postid,
      comment: curComment,
    };
    try {
      await axios.put("/comment", body);
      handleClear();
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };
  const onLike = async () => {
    const body = {
      postid,
    };

    try {
      if (liked) await axios.put("like", body);
      else await axios.put("unlike", body);
      setLiked(!liked);
    } catch (err) {
      console.error(err);
    }
  };

  const onName = (id) => {
    history.push(`/profile/${id}`);
  };

  const onDelete = async () => {
    try {
      const res = await axios.delete(`/deletepost/${postid}`);
      console.log(res.data);
      history.push("/home");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <>
      {post._id ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Navbar loggedIn={isLoggedIn()}></Navbar>
          <PostWrapper>
            <PostHeader>
              <UserAvatar src={post.postBy.image}></UserAvatar>
              <SubtitleWrapper>
                <ClickableTypography
                  variant="h5"
                  onClick={() => onName(post.postBy._id)}
                >
                  {post.postBy.name}
                </ClickableTypography>
                {post.postBy._id === getUserId() && (
                  <EditWrapper>
                    <EditPost
                      topic={post.topic}
                      content={post.content}
                      postid={postid}
                    />
                    <CustomButton tip="Delete your post" onClick={onDelete}>
                      <Delete />
                    </CustomButton>
                  </EditWrapper>
                )}
                <Typography>{post.postBy.email}</Typography>
              </SubtitleWrapper>
              <TimeWrapper>{moment(post.createdAt).fromNow()}</TimeWrapper>
            </PostHeader>
            <PostContent>{post.content}</PostContent>
            {liked ? (
              <LikeButton onClick={onLike}>Like</LikeButton>
            ) : (
              <LikeButton onClick={onLike}>Unlike</LikeButton>
            )}
            <CommentWrapper>
              <CurAvatar src={getUserImage()}></CurAvatar>
              <CommentField
                placeholder="Write a comment..."
                onChange={handleOnChange}
                value={curComment}
              ></CommentField>
            </CommentWrapper>
            <CommentBtnWrapper>
              <PostButton onClick={handleClear}>Clear</PostButton>
              <PostButton onClick={handleSend}>Send</PostButton>
            </CommentBtnWrapper>
            <CommentsWrapper>
              {post.comments.map((c, i) => (
                <CommentCard key={i}>
                  <CurAvatar src={c.commentBy.image}></CurAvatar>
                  <CommentTextWrapper>
                    <ClickableTypography
                      variant="h6"
                      onClick={() => onName(c.commentBy._id)}
                    >
                      {c.commentBy.name}
                    </ClickableTypography>
                    <Typography>{c.text}</Typography>
                  </CommentTextWrapper>
                </CommentCard>
              ))}
            </CommentsWrapper>
          </PostWrapper>
          <PostBg src={postBg} alt="postBg"></PostBg>
          <LaptopBg src={laptop} alt="laptop"></LaptopBg>
          <PhoneBg src={phone} alt="phone"></PhoneBg>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Post;
