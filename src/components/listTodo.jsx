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
                    <svg
                      className="w-full h-8 p-1.5"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 407.096 407.096"
                    >
                      <g>
                        <g>
                          <path
                            d="M402.115,84.008L323.088,4.981C319.899,1.792,315.574,0,311.063,0H17.005C7.613,0,0,7.614,0,17.005v373.086
			c0,9.392,7.613,17.005,17.005,17.005h373.086c9.392,0,17.005-7.613,17.005-17.005V96.032
			C407.096,91.523,405.305,87.197,402.115,84.008z M300.664,163.567H67.129V38.862h233.535V163.567z"
                          />
                          <path
                            d="M214.051,148.16h43.08c3.131,0,5.668-2.538,5.668-5.669V59.584c0-3.13-2.537-5.668-5.668-5.668h-43.08
			c-3.131,0-5.668,2.538-5.668,5.668v82.907C208.383,145.622,210.92,148.16,214.051,148.16z"
                          />
                        </g>
                      </g>
                    </svg>
                  </button>
                ) : (
                  <button onClick={() => handleEdit(todo.id)}>
                    <svg
                      className="w-full h-8 p-1.5"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M895.856847 313.16299l-78.107152 78.107152L632.709534 206.228687l78.069657-78.107152c26.508929-26.508929 53.017859 0 53.017859 0l132.059798 132.022303C895.856847 260.145131 922.365776 286.654061 895.856847 313.16299zM116.361413 907.654465l224.336162-39.37099L155.246261 682.832162 116.361413 907.654465zM181.262584 657.661414l185.06602 185.06602 423.00897-423.00897L604.271554 234.652444 181.262584 657.661414z" />
                    </svg>
                  </button>
                )}
                <button onClick={() => handleDelete(todo.id)}>
                  <svg
                    className="w-full h-8 p-1.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="100px"
                    height="100px"
                  >
                    <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
                  </svg>
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
