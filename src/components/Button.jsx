import { useState } from "react";

export default function Button({ onCountChange }) {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
    onCountChange(count + 1); // Llamar la función para actualizar el stock
  };

  const handleSubtract = () => {
    if (count > 0) {
      setCount(count - 1);
      onCountChange(count - 1); // Llamar la función para actualizar el stock
    }
  };

  return (
    <div className="button-container">
      <button className="btn-min" onClick={handleSubtract}>
        -
      </button>
      <span className="btn-count">{count}</span>
      <button className="btn-plus" onClick={handleAdd}>
        +
      </button>
    </div>
  );
}
