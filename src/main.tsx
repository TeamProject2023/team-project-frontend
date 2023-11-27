import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./styles/index.scss";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        {/*<Header />*/}
        <RouterProvider router={router} />
        <Footer />
    </React.StrictMode>,
);
