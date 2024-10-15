export default function Banner(imgBanner) {
  return (
    <div>
      <img
        className="header-banner"
        //sintaxis url para importar imgs
        src={`../src/img/banner_${imgBanner.category}.jpg`}
        alt="Banner"
      />
    </div>
  );
}
