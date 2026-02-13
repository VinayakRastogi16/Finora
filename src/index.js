import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Landing Page/home/HomePage";
import ProductPage from "./Landing Page/Product/ProductPage";
import PricingPage from "./Landing Page/Pricing/PricingPage";
import AboutPage from "./Landing Page/About/AboutPage";
import SupportPage from "./Landing Page/Support/SupportPage";
import SignUp from "./Landing Page/Signup/SignUp";
import Navbar from "./Landing Page/Navbar";
import Footer from './Landing Page/Footer';
import NotFound from './Landing Page/NotFound'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
  </BrowserRouter>,
);