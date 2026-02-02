import React from 'react'
import HeroSection from './HeroSection';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Navbar from '../Navbar';
import Footer from '../Footer';



function ProductPage() {
    return ( 
        <>
            <Navbar/>
            <HeroSection/>
            <LeftSection/>
            <RightSection/>
            <Footer/>
        </>
     );
}

export default ProductPage;