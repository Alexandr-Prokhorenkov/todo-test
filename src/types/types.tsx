export type FilterValuesType = "All" | "Completed" | "Active" | "";

export type FormValues = {
  todo: string;
};

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type TasksState = {
  tasks: TaskType[];
  filter: FilterValuesType;
};

export type PropsType = {
  tasks: Array<TaskType>;
};

export type TodoItemProps = {
  task: TaskType;
  onToggle: (id: string) => void;
};
