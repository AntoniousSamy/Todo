import React from "react";
import Todo from "./todo.js";
const Todos = (props) => {
  return (
    <div className="todo-list">
      {props.todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          toggleTodo={props.toggleTodo}
          deleteTodo={props.deleteTodo}
          editeTodos={props.editeTodos}
          mode={props.mode}
        />
      ))}
      {props.todos.length === 0 && (
        <h3 className="no-todos">لا يوجد مهام حالية....</h3>
      )}
    </div>
  );
};

export default Todos;
