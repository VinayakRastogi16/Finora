import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Landing Page/home/HomePage';
import ProductPage from './Landing Page/Product/ProductPage';
import PricingPage from './Landing Page/Pricing/PricingPage';
import AboutPage from './Landing Page/About/AboutPage';
import SupportPage from './Landing Page/Support/SupportPage';
import SignUp from './Landing Page/Signup/SignUp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage/>
    <SignUp/>
    <ProductPage/>
    <PricingPage/>
    <AboutPage/>
    <SupportPage/>
  </React.StrictMode>
);
