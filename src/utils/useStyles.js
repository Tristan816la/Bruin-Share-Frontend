import { makeStyles } from "@material-ui/core/styles";

const loginbg = "cover_bg_test2.png";

export const useStyles = makeStyles((theme) => ({
  post: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 20px",
    borderRadius: "30px",
    width: "min(300px, 20vw)",
    height: "min(500px, 50vh)",
    border: "1px solid #000000",
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
    width: "min(290px, 18vw)",
    height: "min(500px, 45vh)",
    border: "1px solid #000000",
    margin: theme.spacing(1, 0, 1),
    overflow: "hidden",
    position: "relative",
  },
  content: {
    overflowWrap: "break-word",
  },
  time: {
    position: "absolute",
    right: "9px",
    bottom: "8px",
  },
  likeComment: {
    alignSelf: "flex-start",
    flexDirection: "row",
    display: "flex",
    width: "100%",
    gap: "20px",
  },
  likecommenttext: {
    marginTop: "12px",
  },

  /**<------------------Home--------------------------------------> */
  // homeroot: {
  //   display: "flex",
  //   flexDirection: "column",
  // },
  homebody: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
    gridColumnGap: "50px",
  },

  homeposts: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
    // padding: theme.spacing(1, 2, 2),
    gridColumnGap: "10px",
    gridRowGap: "30px",
    height: "88.5vh",
    width: "71vw",
    overflow: "scroll",
    paddingTop: "20px",
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
}));
