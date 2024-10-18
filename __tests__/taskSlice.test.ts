import taskSlice, { addTask, toggleTask, removeComplitedTasks } from '../src/services/slices/taskSlice';
import { TasksState, TaskType } from '../src/types/types';
import { v1 } from 'uuid';

describe('taskSlice', () => {
  let initialState: TasksState;

  beforeEach(() => {
    initialState = {
      tasks: [],
      filter: '',
    };
  });

  it('должен обрабатывать добавление задачи', () => {
    const newTaskTitle = 'Тестовая задача';
    const action = addTask(newTaskTitle);
    const state = taskSlice(initialState, action); // Здесь изменено

    expect(state.tasks.length).toBe(1);
    expect(state.tasks[0]).toMatchObject({
      title: newTaskTitle,
      isDone: false,
    });
  });

  it('должен обрабатывать переключение состояния задачи', () => {
    const taskId = v1();
    const existingTask: TaskType = { id: taskId, title: 'Тестовая задача', isDone: false };
    initialState.tasks.push(existingTask);
    
    const action = toggleTask(taskId);
    const state = taskSlice(initialState, action); // Здесь изменено

    expect(state.tasks[0].isDone).toBe(true);
  });

  it('должен обрабатывать удаление завершенных задач', () => {
    const completedTask: TaskType = { id: v1(), title: 'Завершенная задача', isDone: true };
    const activeTask: TaskType = { id: v1(), title: 'Активная задача', isDone: false };
    initialState.tasks.push(completedTask, activeTask);

    const action = removeComplitedTasks();
    const state = taskSlice(initialState, action); // Здесь изменено

    expect(state.tasks.length).toBe(1);
    expect(state.tasks[0]).toEqual(activeTask);
  });
});
