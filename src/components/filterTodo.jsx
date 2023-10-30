import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/reducers/todo-reducer";
import FilterButton from "./filterButton"; // Import komponen FilterButton

function FilterTodo() {
  const dispatch = useDispatch();

  const handleFilter = (filter) => {
    // Mengirim aksi untuk mengatur filter
    dispatch(setFilter(filter));
  };

  return (
    <div className="flex mx-3 min-w-lg md:min-w-2xl lg:min-w-lg">
      <div className="flex gap-3 w-full"> {/* Menambahkan kelas lg:justify-start */}
        <FilterButton label="All" onClick={() => handleFilter("all")} />
        <FilterButton label="Active" onClick={() => handleFilter("active")} />
        <FilterButton label="Completed" onClick={() => handleFilter("completed")} />
      </div>
    </div>
  );
}

export default FilterTodo;
