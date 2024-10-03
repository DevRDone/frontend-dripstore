import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CategoryPage from "../pages/CategoryPage";
import PageNotFound from "../pages/PageNotFound";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";

function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="/product"
                element={<ProductPage />}
            />
            <Route
                path="/product/details"
                element={<ProductDetailsPage/>}
            />
            <Route
                path="/category"
                element={<CategoryPage />}
            />
            <Route
                path="*"
                element={<PageNotFound />}
            />
        </Routes>
    )
}

export default AppRoutes;
