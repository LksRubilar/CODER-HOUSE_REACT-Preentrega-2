import { useState, useEffect } from "react";

export default function StockCount({ initialStock, count }) {
  const [stock, setStock] = useState(initialStock);

  useEffect(() => {
    // Restar la cantidad seleccionada del stock (count)
    setStock(initialStock - count);
  }, [count, initialStock]);

  return (
    <div className="stock-count">
      <p>
        Stock disponible: <span> {stock}</span>
      </p>
    </div>
  );
}
