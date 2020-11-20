import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  root: {

  },
}));


const Private = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Navbar></Navbar>
    </div>
  );
};

export default Private;
