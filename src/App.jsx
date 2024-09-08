import { useState } from "react";
import Food4Weeks from "./Food4Weeks";
import DogWeight from "./DogWeight";
import Calculadora from "./Calculadora";

function App() {
  const [selectedWeeks, setSelectedWeeks] = useState(null);
  const [weight, setWeight] = useState("");

  const handleWeekChange = (event) => {
    setSelectedWeeks(parseInt(event.target.value));
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  console.log(selectedWeeks, weight);

  return (
    <>
      <header className="text-center">
        <h1 className="text-4xl">Calculadora compra BARF</h1>
      </header>
      <div className="px-2">
        <div className=" mt-10">
          <DogWeight onWeightChange={handleWeightChange} weight={weight} />
        </div>
        <Food4Weeks onWeekChange={handleWeekChange} />
      </div>
      <Calculadora />
    </>
  );
}

export default App;
