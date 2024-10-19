import React, { useCallback } from "react";
import classes from "./Todolist.module.css";
import { useDispatch } from "react-redux";
import { PropsType } from "../../types/types";
import TodoItem from "../todoItem/TodoItem";
import { toggleTask } from "../../services/slices/taskSlice";
import { Box, List } from "@mui/material";

const TodoList = ({ tasks }: PropsType) => {
  const dispatch = useDispatch();

  const handleToggleTask = useCallback(
    (id: string) => {
      dispatch(toggleTask(id));
    },
    [dispatch]
  );

  return (
    <Box className={classes.todolistContainer}>
      <List className={classes.todoList}>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} onToggle={handleToggleTask} />
        ))}
      </List>
    </Box>
  );
};

export default React.memo(TodoList);
