import React from "react";
import FeatherIcon from "feather-icons-react";

const todo = (props) => {
  return (
    <div className={`todos-todo ${props.todo.done ? "done" : ""} `}>
      <div
        className="todos-todo_icon"
        onClick={() => props.toggleTodo(props.todo.id)}
      >
        <FeatherIcon icon={props.todo.done ? "check-circle" : "circle"} />
      </div>
      <div className="todos-todo_text">{props.todo.title}</div>
      {props.mode !== "edit" && (
        <div className="todos-todo_cta">
          <div
            className="todos-todo_cta-edit"
            onClick={() => props.editeTodos(props.todo)}
          >
            <FeatherIcon icon="edit" size="20" />
          </div>
          <div
            className="todos-todo_cta-delete"
            onClick={() => props.deleteTodo(props.todo.id)}
          >
            <FeatherIcon icon="trash-2" size="20" />
          </div>
        </div>
      )}
    </div>
  );
};

export default todo;
