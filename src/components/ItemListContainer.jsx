import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Banner from "./Banner";

export default function ItemListContainer() {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   let productsFiltered = categoryId
  //     ? mockData.filter((product) => product.category === categoryId)
  //     : mockData;

  //   setProducts(productsFiltered);
  // }, [categoryId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simula una solicitud de datos desde una API
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

    fetchData(); // Llama a la función asíncrona para hacer el fetch
  }, [categoryId]);

  return (
    <>
      <Banner category={categoryId} />
      <h1 className="main-txt">{categoryId}</h1>
      <div className="card-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="card" key={product.id}>
              <Link className="" to={`/item/${product.title}`}>
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
