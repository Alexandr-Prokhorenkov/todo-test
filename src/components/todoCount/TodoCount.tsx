import React from "react";
import classes from "./Todocount.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store/store";

const TodoCount = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const countTasks = tasks.filter((todo) => !todo.isDone);
  return (
    <div>
      <span className={classes.todocount}>
        <b>{countTasks.length}</b> items left
      </span>
    </div>
  );
};

export default TodoCount;
