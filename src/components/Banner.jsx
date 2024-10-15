export default function Banner({ category }) {
  const defaultBanner = "../src/img/banner_header.jpg"; // Ruta de la imagen por defecto

  return (
    <div>
      <img
        className="header-banner"
        // Sintaxis url para importar imgs
        src={category ? `../src/img/banner_${category}.jpg` : defaultBanner}
        alt="Banner"
      />
    </div>
  );
}
