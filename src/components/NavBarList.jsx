import { useEffect, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default function NavList() {
  const [categoriesNavbar, setCategoriesNavbar] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simula una solicitud de datos desde un archivo JSON local
        const response = await fetch("../src/data/mockData.json");
        const data = await response.json();

        // Extrae las categorías  de los productos
        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];

        // Establecemos las categorías en el estado
        setCategoriesNavbar(uniqueCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Fetch Llama a la función asíncrona para hacer el fetch de datos
  }, []);

  return (
    <div className="d-flex w-md-100 content-space-center content-align-items-center">
      <div className="black-veil"></div>
      <div className="position-sm-absolute nav-sm-background">
        <div className="">
          {/* Generamos dinámicamente los NavLinks basados en las categorías */}
          {categoriesNavbar.map((category) => (
            <NavLink
              className={"nav-txt"}
              key={category}
              to={`/category/${category}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </NavLink>
          ))}
        </div>
      </div>
      <a className="d-none d-sm-block" href="">
        <RiMenu3Line className="icon-main" />
      </a>
    </div>
  );
}
