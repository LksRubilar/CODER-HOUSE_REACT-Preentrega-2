import CartWidget from "./CartWidget";
import NavList from "./NavBarList";
import WishList from "./WishList";

export default function NavBar() {
  return (
    <nav className="d-flex w-md-100 content-space-between content-align-items-center flex-sm-direction">
      <NavList />
      <div className="d-flex content-align-items-center">
        <WishList />
        <CartWidget />
      </div>
    </nav>
  );
}
