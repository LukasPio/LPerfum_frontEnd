import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SearchBox from "./SerchBox"
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons"
import NavBar from "./NavBar"

export default function Header() {
    return (
        <header>
            <img src="/logo.png" />
            <SearchBox />
            <section className="header-icons">
                <FontAwesomeIcon icon={faUser} className="user-icon"/>
                <FontAwesomeIcon icon={faCartShopping} className="cart-icon"/>
            </section>
            <hr />
            <NavBar />
        </header>
    )
}