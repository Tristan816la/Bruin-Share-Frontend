import axios from "axios";

export const isLoggedIn = () => {
  return !!window.localStorage.getItem("AuthToken");
};

export const logginUser = async (email, password) => {
  const body = {
    email,
    password,
  };
  try {
    const res = await axios.post("/login", body);
    window.localStorage.setItem("AuthToken", `Bearer ${res.data.mytoken}`);
    window.localStorage.setItem("UserId", res.data.userinfo._id);
    window.localStorage.setItem("UserImage", res.data.userinfo.image);
    window.location.reload(); // Add this because Nav bar needs to rerender
  } catch (err) {
    console.error(err);
  }
};
