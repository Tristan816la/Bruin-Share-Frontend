export const getUserId = () => {
  if (window.localStorage.getItem("UserId")) {
    return window.localStorage.getItem("UserId");
  }
};

export const getUserImage = () => {
  if (window.localStorage.getItem("UserImage")) {
    return window.localStorage.getItem("UserImage");
  }
};
