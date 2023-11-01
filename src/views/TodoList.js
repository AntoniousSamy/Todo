import React, { useState } from "react";
import Todos from "../components/todos/Todos";
import TodosForm from "../components/todos/TodosForm";
// const initialData = [
//   { id: 1, title: "مستحضرات تجميل", done: true },
//   { id: 2, title: "الواجب", done: false },
//   { id: 3, title: "العمل", done: true },
//   { id: 4, title: "الاشغال العمه", done: false },
// ];
const initialData = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];
const TodoList = () => {
  const [todos, setTodos] = useState(initialData);
  //modes : add , filter , edit
  const [mode, setMode] = useState("add");

  const setToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [activeTodo, setActiveTodo] = useState(null);
  const toggleTodo = (id) => {
    setTodos((data) => {
      const newData = data.map((td) => {
        if (td.id === id) {
          // td.done = !td.done;
          return { ...td, done: !td.done };
        }
        return td;
      });
      return newData;
    });
    setToLocal();
  };
  const deleteTodo = (id) => {
    setTodos((data) => {
      const newData = data.filter((td) => td.id !== id);
      return newData;
    });
    setToLocal();
  };
  const addTodo = (title) => {
    if (mode !== "edit") {
      const newTodo = {
        id: new Date().getTime(),
        title,
        done: false,
      };
      setTodos((data) => {
        return [newTodo, ...data];
      });
    } else if (mode === "edit") {
      const newTodo = todos.map((t) => {
        if (t.id === activeTodo.id) {
          t.title = title;
        }
        return t;
      });
      setTodos(newTodo);
      setMode("add");
    }
    setToLocal();
  };
  const toggleFilter = () => {
    if (mode === "edit") {
      return;
    }
    if (mode === "filter") {
      setMode("add");
    } else {
      setMode("filter");
    }
  };
  const editeTodos = (todo) => {
    setMode("edit");
    setActiveTodo(todo);
  };
  let currentTodos = [...todos];
  if (mode === "filter") {
    currentTodos = todos.filter((t) => !t.done);
  }
  if (mode === "edit" && activeTodo) {
    currentTodos = [activeTodo];
  }
  setToLocal();
  return (
    <main>
      <div className="container">
        <div className="todos">
          <TodosForm
            addTodo={addTodo}
            toggleFilter={toggleFilter}
            mode={mode}
            activeTodo={activeTodo}
          />
          <Todos
            todos={currentTodos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editeTodos={editeTodos}
            mode={mode}
          />
        </div>
      </div>
    </main>
  );
};

export default TodoList;
