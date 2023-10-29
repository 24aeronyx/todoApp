import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTodo } from "../redux/reducers/todo-reducer";
import { deleteTodo } from "../redux/reducers/todo-reducer";

function ListTodo() {
  const [editValue, setEditValue] = useState("");
  const [editingId, setEditingId] = useState(null);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos); 

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

  return (
    <div className="flex items-center justify-center m-2">
      <div className="flex-col">
        {todos.map((todo) => (
          <div key={todo.id}>
            <div className="flex justify-between border border-black px-1 w-80 h-8 my-2 items-center">
              {editingId === todo.id ? (
                <input
                  className="rounded focus:outline-none w-full pr-1"
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
              ) : (
                <span>{todo.value}</span>
              )}
              <div className="flex justify-between">
                {editingId === todo.id ? (
                  <button onClick={() => handleSave(todo.id)}><img src="../src/assets/save.svg" className="w-full h-8 p-1.5" /></button>
                ) : (
                  <button onClick={() => handleEdit(todo.id)}>
                    <img src="../src/assets/pen.svg" className="w-full h-8 p-1.5" />
                  </button>
                )}
                <button onClick={() => handleDelete(todo.id)}><img src="../src/assets/delete.svg" className="w-full h-8 p-1.5" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListTodo;
