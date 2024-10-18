import React, { useCallback } from "react";
import "./assets/css/App.css";
import AddItemForm from "./components/addItemForm/AddItemForm";
import TodoList from "./components/todoList/Todolist";
import Header from "./components/header/Header";
import { useSelector } from "react-redux";
import Footer from "./components/footer/Footer";
import { selectFilter, selectTasks } from "./services/selectors/selectors";

function App() {
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilter);

  const getFilteredTasks = useCallback(() => {
    switch (filter) {
      case "Active":
        return tasks.filter((task) => !task.isDone);
      case "Completed":
        return tasks.filter((task) => task.isDone);
      default:
        return tasks;
    }
  }, [filter, tasks]);

  return (
    <div className="App">
      <div className="Container">
        <Header />
        <AddItemForm />
        <TodoList tasks={getFilteredTasks()} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
