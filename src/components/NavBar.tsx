import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <p>Início</p>
      </Link>
      <Link to={"/products"}>
        <p>Produtos</p>
      </Link>
      <Link to={"/contact"}>
        <p>Contato</p>
      </Link>
      <Link to={"/aboutUs"}>
        <p>Sobre nós</p>
      </Link>
      <Link to={"/howToBuy"}>
        <p>Como comprar</p>
      </Link>
      <Link to={"/frequentQuestions"}>
        <p>Dúvidas frequentes</p>
      </Link>
    </div>
  );
}
