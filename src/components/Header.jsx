import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export default function Header(img) {
  return (
    <header>
      <div className="bg container-full d-flex content-space-between p-vertical header-container">
        <div className="img-div">
          <Link to={"/"}>
            <img className="logo-nv" src={img.logo} alt="Logo" />
          </Link>
        </div>
        <NavBar />
      </div>
    </header>
  );
}
