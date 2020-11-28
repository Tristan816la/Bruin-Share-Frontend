export const isLoggedIn = () => {
  return !!window.localStorage.getItem("AuthToken");
};
