import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../slices/taskSlice";
import filtersReduces from '../slices/filterSlice'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReduces
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
