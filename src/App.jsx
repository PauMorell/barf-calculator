import { useState, useEffect } from "react";
import Food4Weeks from "./Food4Weeks";
import DogWeight from "./DogWeight";
import QuantityForm from "./QuantityForm";

function App() {
  const [selectedWeeks, setSelectedWeeks] = useState(null);
  const [weight, setWeight] = useState("");
  const [quantities, setQuantities] = useState({
    HC: 0,
    C: 0,
    VISC: 0,
    VERD: 0,
  });

  const handleWeekChange = (event) => {
    setSelectedWeeks(parseInt(event.target.value));
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const dailyTotal = weight * 0.027 * 1000;
  const HC = dailyTotal * 0.45;
  const C = dailyTotal * 0.3;
  const VISC = dailyTotal * 0.15;
  const VERD = dailyTotal * 0.15;

  const calcWeekQuantity = (quantity, weeks) => quantity * weeks * 7;

  useEffect(() => {
    if (selectedWeeks && weight) {
      setQuantities({
        HC: calcWeekQuantity(HC, selectedWeeks),
        C: calcWeekQuantity(C, selectedWeeks),
        VISC: calcWeekQuantity(VISC, selectedWeeks),
        VERD: calcWeekQuantity(VERD, selectedWeeks),
      });
    }
  }, [selectedWeeks, weight]);

  const updateCategoryAmount = (category, amount) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [category]: Math.max(0, prevQuantities[category] - amount),
    }));
  };

  return (
    <>
      <header className="text-center">
        <h1 className="text-4xl">Calculadora compra BARF</h1>
      </header>
      <div className="px-2">
        <div className="mt-10">
          <DogWeight onWeightChange={handleWeightChange} weight={weight} />
        </div>
        <Food4Weeks onWeekChange={handleWeekChange} />
      </div>
      <QuantityForm
        quantities={quantities}
        onQuantityChange={updateCategoryAmount}
      />
    </>
  );
}

export default App;
