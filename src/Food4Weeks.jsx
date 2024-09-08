import React from "react";

export default function Food4Weeks({ onWeekChange }) {
  return (
    <>
      <label htmlFor="weeksNumber">❯ Quantes setmanes de menjar?</label>
      <select
        onChange={onWeekChange}
        defaultValue=""
        id="weeksNumber"
        className="w-max mt-2 p-2 border rounded-md"
      >
        <option value="">Selecciona setmanes</option>
        <option value="1">1 setmana</option>
        <option value="2">2 setmanes</option>
        <option value="3">3 setmanes</option>
        <option value="4">4 setmanes</option>
      </select>
    </>
  );
}
