import React from "react";
import FilterButton from "./filterButton"; // Import komponen FilterButton

function FilterTodo({ handleFilter }) {
  return (
    <div className="flex justify-center">
      <div className="flex gap-3 w-80">
        <FilterButton label="All" onClick={() => handleFilter("all")} />
        <FilterButton label="Active" onClick={() => handleFilter("active")} />
        <FilterButton label="Completed" onClick={() => handleFilter("completed")} />
      </div>
    </div>
  );
}

export default FilterTodo;