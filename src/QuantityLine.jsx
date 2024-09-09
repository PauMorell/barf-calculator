import React, { useState } from "react";

export default function QuantityLine({ categoria, quantitat, onQuantityAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = () => {
    const amount = parseFloat(inputValue);
    if (!isNaN(amount) && amount > 0) {
      onQuantityAdd(amount);
      setInputValue("");
    }
  };

  const formattedQuantity = quantitat.toFixed(0);

  return (
    <div className="grid grid-cols-4 gap-1 p-1">
      <div className="p-1 text-center">
        <label htmlFor={categoria}>{categoria}</label>
      </div>
      <div className="p-1 text-center">{formattedQuantity} g</div>
      <div className="p-1 text-center">
        <input
          id={categoria}
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          min="0"
          step="1"
        ></input>
      </div>
      <div className="p-1 text-center">
        <button className="px-2 text-2xl" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
