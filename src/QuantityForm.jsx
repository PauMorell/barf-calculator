import React from "react";
import QuantityLine from "./QuantityLine";

export default function QuantityForm({ quantities, onQuantityChange }) {
  return (
    <div>
      <QuantityLine
        categoria="Ossos carnosos"
        quantitat={quantities.HC}
        onQuantityAdd={(amount) => onQuantityChange("HC", amount)}
      />
      <QuantityLine
        categoria="Carn"
        quantitat={quantities.C}
        onQuantityAdd={(amount) => onQuantityChange("C", amount)}
      />
      <QuantityLine
        categoria="Vísceres"
        quantitat={quantities.VISC}
        onQuantityAdd={(amount) => onQuantityChange("VISC", amount)}
      />
      <QuantityLine
        categoria="Verdures"
        quantitat={quantities.VERD}
        onQuantityAdd={(amount) => onQuantityChange("VERD", amount)}
      />
    </div>
  );
}
