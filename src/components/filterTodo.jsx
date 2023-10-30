import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/reducers/todo-reducer";
import FilterButton from "./filterButton"; 

function FilterTodo() {
  const dispatch = useDispatch();

  
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilter = (filter) => {
    
    setActiveFilter(filter);
    dispatch(setFilter(filter));
  };

  return (
    <div className="flex mx-3 min-w-lg md:min-w-2xl lg:min-w-lg">
      <div className="flex gap-3 w-full">
        <FilterButton
          label="All"
          onClick={() => handleFilter("all")}
          active={activeFilter === "all"} 
        />
        <FilterButton
          label="Active"
          onClick={() => handleFilter("active")}
          active={activeFilter === "active"} 
        />
        <FilterButton
          label="Completed"
          onClick={() => handleFilter("completed")}
          active={activeFilter === "completed"} 
        />
      </div>
    </div>
  );
}

export default FilterTodo;
