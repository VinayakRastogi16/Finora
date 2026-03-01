import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className='container-lg p-5 mb-5'>
            <div className='row text-center'>
                <img src="media/images/homeHero.png" alt='heroImage' className='mb-5'/>

                <div className='col-md-12'>
                <h1 className='mt-5'>Invest in everything </h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more. </p>
                <Link to='/signup' className="pb-1 mt-4 btn btn-primary mb-5 fs-5 btn-hover" style={{width:"20vh", margin:"0 auto", backgroundColor:"#387ed1", height:"5vh"}}>
                   <b>Signup For Free</b>
                </Link>
                </div>


            </div>

        </div>
     );
}

export default Hero;