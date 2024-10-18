import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v1 } from "uuid";
import { TasksState, TaskType } from "../../types/types";

const initialState: TasksState = {
  tasks:[],
  filter: "",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: TaskType = { id: v1(), title: action.payload, isDone: false };
      state.tasks.unshift(newTask);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    removeComplitedTasks: (state) => {
      state.tasks = state.tasks.filter((task) => !task.isDone);
    },
  },
});

export const { addTask, toggleTask, removeComplitedTasks } = taskSlice.actions;
export default taskSlice.reducer;
