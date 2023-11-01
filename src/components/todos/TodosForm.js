import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
const TodosForm = (props) => {
  const [title, setTitle] = useState("");
  const [editrender, setEditRender] = useState(false);
  if (props.mode === "edit" && !editrender) {
    setTitle(props.activeTodo.title);
    setEditRender(true);
  }
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAddNewTodo = () => {
    setEditRender(false);
    if (!title.trim()) {
      return alert("Please Add Todo...");
    }
    props.addTodo(title);
    setTitle("");
  };
  return (
    <div className="todos-form">
      <div
        className={`todos-form_icon ${props.mode === "filter" ? "active" : ""}`}
        onClick={props.toggleFilter}
      >
        <FeatherIcon icon="circle" />
      </div>
      <div className="todos-form_form">
        <input
          type="text"
          value={title}
          onChange={handleTitle}
          placeholder="إضاف مهمة جديدة...."
        />
      </div>
      <div className="todos-form_submit" addTodo={props.addTodo}>
        <button
          className="btn"
          disabled={!title.trim()}
          onClick={handleAddNewTodo}
        >
          {props.mode === "edit" ? "تعديل" : "إضافة"}
        </button>
      </div>
    </div>
  );
};

export default TodosForm;
