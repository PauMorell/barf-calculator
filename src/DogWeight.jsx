import React from "react";

export default function DogWeight({ weight, onWeightChange }) {
  return (
    <>
      <div className="flex justify-between max-w-full overflow-hidden">
        <label htmlFor="dogWeight">❯ Pes de l'animal</label>
        <div className="flex items-center max-w-full">
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
          <span className="ml-1">kg</span>
        </div>
      </div>
    </>
  );
}
