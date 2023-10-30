import React from "react";

function FilterButton({ label, onClick }) {
  return (
    <button className="text-white text-xs text-center rounded-full w-full lg:w-24 mt-4 bg-black p-1.5 h-5 flex items-center justify-center" onClick={onClick}>
      {label}
    </button>
  );
}

export default FilterButton;