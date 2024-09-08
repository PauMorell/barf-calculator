import React from "react";

export default function Food4Weeks({ onWeekChange }) {
  return (
    <>
      <select onChange={onWeekChange} defaultValue="">
        <option value="">Selecciona setmanes</option>
        <option value="1">1 setmana</option>
        <option value="2">2 setmanes</option>
        <option value="3">3 setmanes</option>
        <option value="4">4 setmanes</option>
      </select>
    </>
  );
}
