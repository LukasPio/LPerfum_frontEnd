import { RouterProvider } from "react-router-dom"
import router from "./router"
import Header from "./components/Header"

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
