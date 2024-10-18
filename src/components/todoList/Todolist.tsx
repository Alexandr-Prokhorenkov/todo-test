import React, { useCallback } from "react";
import classes from "./Todolist.module.css";
import { useDispatch } from "react-redux";
import { PropsType } from "../../types/types";
import TodoItem from "../todoItem/TodoItem";
import { toggleTask } from "../../services/slices/taskSlice";

const TodoList = ({ tasks }: PropsType) => {
  const dispatch = useDispatch();

  const handleToggleTask = useCallback(
    (id: string) => {
      dispatch(toggleTask(id));
    },
    [dispatch]
  );

  return (
    <div className={classes.todolistContainer}>
      <ul className={classes.todoList}>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} onToggle={handleToggleTask} />
        ))}
      </ul>
    </div>
  );
};

export default React.memo(TodoList);
