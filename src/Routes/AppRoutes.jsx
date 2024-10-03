import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CategoryPage from "../pages/CategoryPage";
import PageNotFound from "../pages/PageNotFound";
import ProductDetailsPage from "../pages/ProductDetailsPage";

function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="/products"
                element={<ProductPage />}
            />
            <Route
                path="/products/details"
                element={<ProductDetailsPage />}
            />
            <Route
                path="/categories"
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
