import React from 'react'
import Hero from './Hero';
import Team from './Team';
import Navbar from '../Navbar';
import Footer from '../Footer';


function AboutPage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <Team/>
            <Footer/>
        </>
     );
}

export default AboutPage;