import { makeStyles } from "@material-ui/core/styles";

const loginbg = "cover_bg_test2.png";

export const useStyles = makeStyles((theme) => ({
  /**<--------------Main Story Box ----------------------------------------------------> */
  post: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 20px",
    borderRadius: "5px",
    height: "20vh",
    border: "1px solid silver",
    position: "relative",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(1, 0, 1),
  },
  profile: {
    padding: theme.spacing(0, 1, 0),
  },
  content: {
    padding: "15px 0 0px 10px",
  },
  time: {
    fontSize: "12px",
    color: "silver",
  },
  likeComment: {
    alignSelf: "flex-start",
    flexDirection: "row",
    display: "flex",
    width: "100%",
    gap: "20px",
    height: "3.5vh",
    position: "absolute",
    bottom: "2.5vh",
  },
  likecommenttext: {
    marginTop: "12px",
  },

  /**<------------------Home--------------------------------------> */
  homebody: {
    width: "100vw",
  },

  homeposts: {
    position: "absolute",
    top: "10vh",
    display: "grid",
    width: "41vw",
    paddingLeft: "22vw",
  },

  /**<------------------Comment--------------------------------------> */
  dialogTitle: {
    width: "500px",
    display: "flex",
  },
  closebtn: {
    position: "absolute",
    right: "2px",
    top: "8px",
  },

  sendbtn: {
    marginTop: "20px",
  },
  commentPostCard: {
    minHeight: "100px",
    paddingLeft: "15px",
    display: "flex",
    gap: "15px",
    fontFamily: "Roboto",
    fontSize: "25px",
    alignItems: "center",
  },
  commentPostPostBy: {
    fontSize: "20px",
    fontWeight: "600",
  },
  commentPostContent: {
    fontSize: "18px",
  },
  commentPostImage: {
    width: "60px",
    height: "60px",
  },
  commentCard: {
    minHeight: "50px",
    fontFamily: "Roboto",
    display: "flex",
    alignItems: "center",

    margin: "10px",
    width: "80%",
    paddingLeft: "10px",
  },
  passwordHide: {
    height: "50px",
    paddingRight: "20px",
  },
  commentIcon: {
    width: "50px",
    height: "50px",
  },
  userImage: {
    margin: "10px 10px 0px 2px",
  },

  /**<------------------Login--------------------------------------> */
  loginContainer: {
    display: "flex",
    height: "100vh",
  },
  loginTitle: {
    fontFamily: "Poppins",
    fontWeight: "800",
    fontSize: "30px",
    textAlign: "center",
  },
  loginLeft: {
    justifyContent: "center",
    background: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(${loginbg}) fixed center center no-repeat`,
    backgroundSize: "cover",
    flex: "2 0 auto",
    display: "flex",
    alignItems: "center",
  },
  loginRight: {
    flex: "1 0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  coverImg: {
    width: "35vw",
    maxWidth: "800px",
  },
  page: {
    padding: "100px 50px",
    borderRadius: "30px",
    width: "500px",
  },

  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px 10px",
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(2),
  },

  textField: {
    margin: theme.spacing(4, 0, 2),
  },

  submit: {
    margin: theme.spacing(6, 0, 2),
    width: "60%",
  },

  /** <------------------ Send Post ------------------------------> */
  dialogDescription: {
    paddingLeft: "20px",
  },
  sendPostTopic: {
    marginBottom: "50px",
  },
  sendPostBox: {
    height: "200px",
  },
  /**<-------------------Notifications -----------------------------> */

  notificationButton: {
    color: "#666",
    cursor: "pointer",
  },
  selectButton: {
    display: "flex",
    flexDirection: "row",
    width: "300px",
  },
  selectComments: {
    flex: "50%",
  },
  selectLikes: {
    flex: "50%",
  },
  commentButton: {
    marginRight: "1vh",
  },
  notificationlikeButton: {
    marginRight: "2vh",
  },
  MessageList: {
    maxHeight: 100,
    overflow: "auto",
    position: "relative",
    flexDirection: "column",
    margin: theme.spacing(1, 0, 0),
  },
  listItem: {
    color: "#666",
    cursor: "pointer",
  },

  /**<------------------------- Profile ------------------------------> */
  profilebody: {
    display: "grid",
    margin: "0 300px",
    gridTemplateColumns: "1fr 2fr",
    gridColumnGap: "100px",
  },
  profileposts: {
    display: "grid",
    marginTop: "10vh",
    // gridRowGap: "20px",
  },

  /**<------------------------- Private ------------------------------> */
  privatebody: {
    display: "grid",
    margin: "0 300px",
    gridTemplateColumns: "1fr 2fr",
    gridColumnGap: "100px",
  },
  privateposts: {
    display: "grid",
    marginTop: "10vh",
    // gridRowGap: "20px",
  },
}));
