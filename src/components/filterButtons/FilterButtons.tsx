import React, { useCallback } from "react";
import { Button } from "@mui/material";
import classes from "./Filterbuttons.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, selectTasks } from "../../services/selectors/selectors";
import { changeState } from "../../services/slices/filterSlice";

const buttonStyles = {
  borderColor: "var(--background-color)",
  fontSize: "0.8rem",
  width: "20%",
  height: "40px",
  color: "var(--main-color)",
};

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
      return `${classes.btn} ${filter === filterType ? classes.active : ""}`;
    },
    [filter]
  );

  return (
    <div className={classes.btnContainer}>
      <Button color="secondary" className={getButtonClass("All")} variant="outlined" onClick={handleAllClick} disabled={tasks.length === 0} sx={buttonStyles}>
        All
      </Button>
      <Button color="secondary" className={getButtonClass("Active")} variant="outlined" onClick={handleActiveClick} disabled={tasks.filter((task) => !task.isDone).length === 0} sx={buttonStyles}>
        Active
      </Button>
      <Button color="secondary" className={getButtonClass("Completed")} variant="outlined" onClick={handleCompletedClick} disabled={tasks.filter((task) => task.isDone).length === 0} sx={buttonStyles}>
        Completed
      </Button>
    </div>
  );
};

export default FilterButtons;
