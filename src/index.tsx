/*import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import theme from "./flowbite-theme";
import { Flowbite } from "flowbite-react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import DashboardPage from "./pages";
import SignInPage from "./pages/authentication/sign-in";
import SignUpPage from "./pages/authentication/sign-up";
import EcommerceProductsPage from "./pages/e-commerce/products";
import OrdersPage from "./pages/oders/pedidos";
import ConveyorPage from "./pages/conveyor/banda_trans";

const container = document.getElementById("root");

if (!container) {
  throw new Error("React root element doesn't exist!");
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <Flowbite theme={{ theme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} index />
          <Route path="/authentication/sign-in" element={<SignInPage />} />
          <Route path="/authentication/sign-up" element={<SignUpPage />} />
          <Route
            path="/productos"
            element={<EcommerceProductsPage />}
          />
          <Route path="/pedidos" element={<OrdersPage />} />
          <Route path="/conveyor" element={<ConveyorPage />} />
        </Routes>
      </BrowserRouter>
    </Flowbite>
  </StrictMode>
);
*/
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

import "./index.css";
import theme from "./flowbite-theme";
import { Flowbite } from "flowbite-react";

import  store  from './Redux/store';
import DashboardPage from "./pages";
import SignInPage from "./pages/authentication/sign-in";
import SignUpPage from "./pages/authentication/sign-up";
import EcommerceProductsPage from "./pages/e-commerce/products";
import EcommerceProductsPageDos from "./pages/e-commerce/oldproduct_pg";
import OrdersPage from "./pages/oders/pedidos";
import ConveyorPage from "./pages/conveyor/banda_trans";

const container = document.getElementById("root");

if (!container) {
  throw new Error("React root element doesn't exist!");
}

const root = createRoot(container);

root.render(
  <StrictMode>
    {/* Envolvemos toda la aplicación en el Provider */}
    <Provider store={store}>
      <Flowbite theme={{ theme }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashboardPage />} index />
            <Route path="/authentication/sign-in" element={<SignInPage />} />
            <Route path="/authentication/sign-up" element={<SignUpPage />} />
            <Route path="/productos" element={<EcommerceProductsPage />} />
            <Route path="/productosdos" element={<EcommerceProductsPageDos />} />
            <Route path="/pedidos" element={<OrdersPage />} />
            <Route path="/conveyor" element={<ConveyorPage />} />
          </Routes>
        </BrowserRouter>
      </Flowbite>
    </Provider>
  </StrictMode>
);
