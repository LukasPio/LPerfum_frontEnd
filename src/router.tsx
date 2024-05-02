import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import HowToBuyPage from "./pages/HowToBuyPage";
import FrequentQuestionsPage from "./pages/FrequentQuestionsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "products",
                element: <ProductPage />
            },
            {
                path: "contact",
                element: <ContactPage />
            },
            {
                path: "aboutUs",
                element: <AboutUsPage />
            },
            {
                path: "howToBuy",
                element: <HowToBuyPage />
            },
            {
                path: "frequentQuestions",
                element: <FrequentQuestionsPage />
            }
        ]
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
]);

export default router;
