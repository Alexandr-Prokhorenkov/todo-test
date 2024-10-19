import React from "react";
import classes from "./TodoTitle.module.css";
import { Typography } from "@mui/material";

const TodoTitle = () => {
  return <Typography variant="h1" className={classes.title}>todos</Typography>;
};

export default TodoTitle;
