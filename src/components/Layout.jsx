import Header from "./Header";
import Footer from "./Footer";
import logo from "../img/logo.svg";

export default function Layout({ children }) {
  return (
    <>
      <Header logo={logo} />
      <main className="main-container">{children}</main>
      <Footer logo={logo} />
    </>
  );
}
