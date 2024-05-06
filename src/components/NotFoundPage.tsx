import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <h1 style={{ padding: "0.5rem", fontSize: "2.0rem" }}>
        404 - Essa página não foi encontrada, sinto muito por isso.
      </h1>
      <Link to={"/"}>
        <button
          style={{
            marginLeft: "0.5rem",
            padding: "0.25rem",
            fontSize: "1.0rem",
          }}
        >
          Retornar a página principal.
        </button>
      </Link>
    </>
  );
}
