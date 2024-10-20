import React from "react";
import classes from './TodoItem.module.css'
import { TodoItemProps } from "../../types/types";
import { Checkbox, ListItem } from "@mui/material";

const TodoItem = React.memo(({ task, onToggle}: TodoItemProps) => {

  return (
    <ListItem className={classes.todoItem}>
      <Checkbox checked={task.isDone} onChange={() => onToggle(task.id)} color="default"/>
      <span className={task.isDone ? classes.completedTask : classes.task}>{task.title}</span>
    </ListItem>
  );
});

TodoItem.displayName = "TodoTextInput";
export default TodoItem;