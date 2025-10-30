import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContextProvider.jsx";
import ProductsContextProvider from "./context/ProductsContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
  </AuthContextProvider>
);
