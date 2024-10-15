import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "./Button";
import StockCount from "./StockCount";
import Loading from "./Loading";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const decodedId = decodeURIComponent(id);

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0); // Estado para manejar el conteo de productos

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const response = await fetch("../src/data/mockData.json");
        const data = await response.json();

        let productFiltered = id
          ? data.filter((it) => it.title === decodedId)
          : data;

        setProduct(productFiltered);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, decodedId]);

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  return (
    <>
      <div className="card-grid_detail">
        {loading ? (
          // Renderizado del componente Loading mientras se cargan los productos
          <Loading />
        ) : product.length > 0 ? (
          product.map((item) => (
            <div key={item.id}>
              <Link className="card-item" to={`/item/${item.title}`}>
                <div className="card-detail">
                  <img src={`../src/img/${item.image}.jpg`} alt="" />
                </div>

                <div className="card-info">
                  <h2>{item.title}</h2>
                  <h3>Precio: ${item.price}</h3>
                  <p>{item.description}</p>

                  {/* Renderizar componente Button */}
                  <Button onCountChange={handleCountChange} />

                  {/* Renderizar componente StockCount */}
                  <StockCount initialStock={item.stock} count={count} />
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No se encontraron productos</p>
        )}
      </div>
    </>
  );
}
