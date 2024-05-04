import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBox from "./SerchBox";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./NavBar";
import "../style/components/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="top-header">
        <img src="/logo.png" className="brand-image" />
        <SearchBox />
        <section className="header-icons">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <FontAwesomeIcon icon={faCartShopping} className="icon" />
        </section>
      </div>
      <hr />
      <div className="bottom-header">
        <NavBar />
      </div>
    </header>
  );
}
