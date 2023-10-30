import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  editTodo,
  deleteTodo,
  toggleTodoStatus,
} from "../redux/reducers/todo-reducer";

function ListTodo() {
  const [editValue, setEditValue] = useState("");
  const [editingId, setEditingId] = useState(null);

  const dispatch = useDispatch();

  const filter = useSelector((state) => state.todo.filter);

  const allTodos = useSelector((state) => state.todo.todos);
  const todos = allTodos.filter((todo) => {
    if (filter === "all") {
      return true;
    } else if (filter === "active" && todo.status === "active") {
      return true;
    } else if (filter === "completed" && todo.status === "completed") {
      return true;
    }
    return false;
  });

  const handleEdit = (id) => {
    setEditingId(id);
    setEditValue(todos.find((todo) => todo.id === id)?.value);
  };

  const handleSave = (id) => {
    if (editValue !== "") {
      dispatch(editTodo(id, editValue));
    }
    setEditingId(null);
    setEditValue("");
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleStatus = (id) => {
    dispatch(toggleTodoStatus(id));
  };


  return (
    <div className="flex items-center justify-center m-2 mx-3 max-w-lg md:max-w-2xl lg:max-w-4xl">
      <div className="flex-col w-full min-w-lg md:min-w-2xl lg:min-w-4xl">
        {todos.map((todo) => (
          <div key={todo.id}>
            <div className="flex justify-between border border-black w-full px-1 h-8 my-2 items-center">
              {editingId === todo.id ? (
                <input
                  className="rounded focus:outline-none w-full pr-1"
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
              ) : (
                <div className="flex items-center w-full space-x-2">
                  <input
                    type="checkbox"
                    checked={todo.status === "completed"}
                    onChange={() => handleToggleStatus(todo.id)}
                  />
                  <span
                    className={`${
                      todo.status === "completed" ? "line-through" : ""
                    }`}
                  >
                    {todo.value}
                  </span>
                </div>
              )}
              <div className="flex justify-between">
                {editingId === todo.id ? (
                  <button onClick={() => handleSave(todo.id)}>
                    <img
                      src="../src/assets/save.svg"
                      className="w-full h-8 p-1.5"
                    />
                  </button>
                ) : (
                  <button onClick={() => handleEdit(todo.id)}>
                    <img
                      src="../src/assets/pen.svg"
                      className="w-full h-8 p-1.5"
                    />
                  </button>
                )}
                <button onClick={() => handleDelete(todo.id)}>
                  <img
                    src="../src/assets/delete.svg"
                    className="w-full h-8 p-1.5"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListTodo;
