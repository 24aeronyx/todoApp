const initialState = {
  todos: [
    { id: 1, value: "Belajar React", status: "active" },
    { id: 2, value: "Belajar Redux", status: "active" },
    { id: 3, value: "Study Banding with UM", status: "completed" },
    { id: 4, value: "Belajar Tailwind", status: "completed" },
    { id: 5, value: "Mengerjakan Pre-Test", status: "active" }
  ],
  filter: "all", // Tambahkan filter ke dalam initialState
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: Date.now(),
        value: action.payload,
        status: "active", // Atur status ke "active" secara default
      };

      const cloneTodos = [...state.todos, newTodo];

      return {
        ...state, // Pertahankan semua properti state yang ada
        todos: cloneTodos,
      };

    case "DELETE_TODO":
      const filterTodo = state.todos.filter(
        (item) => item.id != action.payload
      );
      return {
        ...state, // Pertahankan semua properti state yang ada
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
        ...state, // Pertahankan semua properti state yang ada
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
        ...state, // Pertahankan semua properti state yang ada
        todos: statusTodos,
      };

    // Tambahkan case untuk mengatur filter
    case "SET_FILTER":
      return {
        ...state,
        filter: action.filter,
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

// Export a new action for setting the filter
export function setFilter(filter) {
  return {
    type: "SET_FILTER",
    filter,
  };
}

export default todoReducer;
