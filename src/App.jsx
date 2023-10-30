import React from "react";
import FilterTodo from "./components/filterTodo";
import ListTodo from "./components/listTodo";
import InputTodo from "./components/inputTodo";

function App() {
  return (
    <div className="App border border-black m-10 max-w-xs sm:max-w-lg lg:max-w-4xl mx-auto text-center">
      <h1 className="text-2xl my-4">To Do</h1>
      <InputTodo />
      <FilterTodo />
      <ListTodo />
    </div>
  );
}

export default App;
