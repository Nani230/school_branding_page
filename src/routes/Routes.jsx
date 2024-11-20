// RoutesConfig.js
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "../utils/LoadingSpinner"; // Import the custom spinner

// Lazy load the components
const Home = lazy(() => import("../Pages/Home/Home"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Register = lazy(() => import("../pages/Register/Register"));
const Features = lazy(() => import("../pages/features/Features"));
const Product = lazy(() => import("../Pages/Product/Product"));

const RoutesConfig = () => (
    <Suspense fallback={<LoadingSpinner />}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Features" element={<Features />} />
            <Route path="/product/:id" element={<Product />} />
        </Routes>
    </Suspense>
);

export default RoutesConfig;
