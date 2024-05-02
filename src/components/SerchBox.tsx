import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBox() {
    return (
        <div className="search-container">
        <input type="text" placeholder="O que você está buscando hoje?" className="search-input"/>
        <FontAwesomeIcon icon={faSearch} className="search-icon"/>
    </div>
    )
}