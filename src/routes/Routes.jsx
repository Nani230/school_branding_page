import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "../utils/LoadingSpinner"; // Import the custom spinner

// Lazy load the components
const Home = lazy(() => import("../Pages/Home/Home"));
const Contact = lazy(() => import("../Pages/Contact/Contact"));
const Register = lazy(() => import("../Pages/Register/Register"));
const Features = lazy(() => import("../Pages/Features/Features"));
const Product = lazy(() => import("../Pages/Product/Product"));
const NotFound = lazy(() => import("../Pages/NotFound/NotFound"));
const Terms = lazy(() => import("../Pages/Terms/Terms_Condition"));

// Lazy load FormPage
const FormPage = lazy(() => import("@components/Form/FormPage"));
const Privacy = lazy(() => import("@components/privacy/Privacy"));

const RoutesConfig = () => (
    <Suspense fallback={<LoadingSpinner />}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route exact path="/features/:name/:id" element={<Features />} />
            <Route exact path="/product/:id" element={<Product />} />
            <Route path="/form/:name" element={<FormPage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            {/* Catch-all route for undefined paths */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Suspense>
);

export default RoutesConfig;
