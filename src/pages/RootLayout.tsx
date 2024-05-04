import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "../style/style.css";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
