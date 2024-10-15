export default function Loading() {
  return (
    <div className="loading-container">
      <img
        src="../src/img/loading.gif"
        alt="Cargando..."
        className="loading-gif"
      />
      <h2 className="loading-text">Cargando productos, por favor espere...</h2>
    </div>
  );
}
