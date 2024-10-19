import React, { useCallback } from "react";
import classes from "./Footer.module.css";
import FilterButtons from "../filterButtons/FilterButtons";
import TodoCount from "../todoCount/TodoCount";
import { useDispatch, useSelector } from "react-redux";
import { removeComplitedTasks } from "../../services/slices/taskSlice";
import { Box, Button } from "@mui/material";
import { selectTasks } from "../../services/selectors/selectors";

const Footer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const handleRemoveCompleted = useCallback(() => {
    dispatch(removeComplitedTasks());
  }, [dispatch]);

  return (
    <Box className={classes.container}>
      <TodoCount />
      <FilterButtons />
      <Button variant="outlined" className={classes.btn} onClick={handleRemoveCompleted} disabled={tasks.filter((task) => task.isDone).length === 0}>
        Clear сompleted
      </Button>
    </Box>
  );
};

export default Footer;
