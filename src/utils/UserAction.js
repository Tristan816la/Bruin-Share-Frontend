export const getUserId = () => {
  if (window.localStorage.getItem("UserId")) {
    return window.localStorage.getItem("UserId");
  }
};
