import React, { useCallback } from "react";
import { Box, Button } from "@mui/material";
import classes from "./Filterbuttons.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, selectTasks } from "../../services/selectors/selectors";
import { changeState } from "../../services/slices/filterSlice";

const FilterButtons = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilter);

  const handleAllClick = useCallback(() => {
    dispatch(changeState("All"));
  }, [dispatch]);

  const handleActiveClick = useCallback(() => {
    dispatch(changeState("Active"));
  }, [dispatch]);

  const handleCompletedClick = useCallback(() => {
    dispatch(changeState("Completed"));
  }, [dispatch]);

  const getButtonClass = useCallback(
    (filterType: string) => {
      if (tasks.length === 0) {
        return `${classes.btn}`;
      }
      return `${classes.btn} ${filter === filterType ? classes.active : ""}`;
    },
    [filter, tasks]
  );

  return (
    <Box className={classes.btnContainer}>
      <Button className={getButtonClass("All")} variant="outlined" onClick={handleAllClick} disabled={tasks.length === 0}>
        All
      </Button>
      <Button className={getButtonClass("Active")} variant="outlined" onClick={handleActiveClick} disabled={tasks.filter((task) => !task.isDone).length === 0}>
        Active
      </Button>
      <Button className={getButtonClass("Completed")} variant="outlined" onClick={handleCompletedClick} disabled={tasks.filter((task) => task.isDone).length === 0}>
        Completed
      </Button>
    </Box>
  );
};

export default FilterButtons;
