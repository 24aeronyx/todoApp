import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todo-reducer";

function InputTodo() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    
    // Check if the input is empty
    if (input.trim() === "") {
      setError("Input cannot be empty");
    } else {
      // If input is not empty, clear the error and add the todo
      setError(null);
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="flex justify-center m-4 mx-3">
      <form className="flex justify-between border border-black w-full min-w-lg md:min-w-2xl lg:min-w-4xl h-8 pl-1">
        <input
          className="rounded focus:outline-none w-full pr-1" // Menambahkan class "focus:outline-none"
          type="text"
          placeholder="Input to do"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="text-white text-center text-base bg-black p-1.5 flex items-center justify-center"
          onClick={handleClick}
        >
          Add
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default InputTodo;
