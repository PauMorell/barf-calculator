import React from "react";

export default function DogWeight({ weight, onWeightChange }) {
  return (
    <>
      <label htmlFor="dogWeight">❯ Escriu el pes de l'animal</label>
      <input
        id="dogWeight"
        type="number"
        defaultValue=""
        value={weight}
        onChange={onWeightChange}
        min="1"
        step="0.1"
        max="150"
        className="ml-2 pl-1"
      />
      <span style={{ marginLeft: "-30px" }}>kg</span>
    </>
  );
}
