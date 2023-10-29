import FilterTodo from "./components/filterTodo"
import InputTodo from "./components/inputTodo"
import ListTodo from "./components/listTodo"

function App() {

  return (
    <>
      <h1 className="text-center text-2xl my-4 ">To Do</h1>
      <InputTodo />
      <FilterTodo />
      <ListTodo/>
    </>
  )
}

export default App
