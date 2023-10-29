const initialState = {
  todos: [
    { id: 1, value: "belajar react", status: "active" },
    { id: 2, value: "belajar redux", status: "active" },
  ],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: Date.now(),
        value: action.payload,
      };

      const cloneTodos = [...state.todos, newTodo];

      return {
        todos: cloneTodos,
      };

    case "DELETE_TODO":
      const filterTodo = state.todos.filter(
        (item) => item.id != action.payload
      );
      return {
        todos: filterTodo,
      };

    case "EDIT_TODO":
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, value: action.payload.value };
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };

      case "TOGGLE_TODO_STATUS":
        const statusTodos = state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              status: todo.status === "active" ? "completed" : "active",
            };
          }
          return todo;
        });
      
        return {
          todos: statusTodos,
        };

    default:
      return state;
  }
}

export function addTodo(input) {
  return {
    type: "ADD_TODO",
    payload: input,
  };
}

export function deleteTodo(id) {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
}

export function editTodo(id, newValue) {
  return {
    type: "EDIT_TODO",
    payload: { id, value: newValue },
  };
}

export function toggleTodoStatus(id) {
  return {
    type: "TOGGLE_TODO_STATUS",
    payload: id,
  };
}

export default todoReducer;
