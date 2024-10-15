import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Banner from "./Banner";

export default function ItemListContainer() {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../src/data/mockData.json");
        const data = await response.json();

        // Filtrado de productos según categoryId
        let productsFiltered = categoryId
          ? data.filter((product) => product.category === categoryId)
          : data;

        setProducts(productsFiltered);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <>
      <Banner category={categoryId} />
      <h1 className="main-txt">{categoryId || "Productos"}</h1>
      <div className="card-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="card" key={product.id}>
              <Link to={`/item/${product.title}`}>
                <h2>{product.title}</h2>
                <img src={`../src/img/${product.image}.jpg`} alt="" />
                <h3>
                  <span>${product.price}</span>
                </h3>
                <p>{product.description}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>Producto no encontrado</p>
        )}
      </div>
    </>
  );
}
