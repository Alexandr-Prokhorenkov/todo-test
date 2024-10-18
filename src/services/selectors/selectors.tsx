import { RootState } from "../store/store";

export const selectTasks = (state: RootState) => state.tasks.tasks;
export const selectFilter = (state: RootState) => state.filters.checked;