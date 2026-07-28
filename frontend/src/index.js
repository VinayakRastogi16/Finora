import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import ProductPage from "./landing_page/Product/ProductPage";
import PricingPage from "./landing_page/Pricing/PricingPage";
import AboutPage from "./landing_page/About/AboutPage";
import SupportPage from "./landing_page/Support/SupportPage";
import SignUp from "./landing_page/Signup/SignUp";
import Navbar from "./landing_page/Navbar";
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound'
import Login from "./landing_page/LogIn/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
  </BrowserRouter>,
);