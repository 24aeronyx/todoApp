import React from "react";

function FilterButton({ label, onClick, active }) {
  const buttonStyle = {
    backgroundColor: active ? "#1F45FC" : "black", 
    color: active ? "white" : "white",
  };

  return (
    <button
      className="text-white text-xs text-center rounded-full w-full lg:w-24 mt-4 p-1.5 h-5 flex items-center justify-center"
      style={buttonStyle}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default FilterButton;
