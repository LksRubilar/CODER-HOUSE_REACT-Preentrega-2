export default function Footer(img) {
  return (
    <footer className="bg p-vertical">
      <div className="img-div">
        <img src={img.logo} alt="Logo" />
      </div>
    </footer>
  );
}
