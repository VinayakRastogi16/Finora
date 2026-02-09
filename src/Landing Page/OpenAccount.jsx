import React from 'react'


function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>

                <div className='col-md-12'>
                <h1 className='mt-5 fs-4 mb-4'>Open a Zerodha account</h1>
                <p style={{color:"charcoal", fontWeight:"bold"}}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className="pb-1 mt-4 btn btn-primary mb-5 fs-5" style={{width:"20vh", margin:"0 auto", backgroundColor:"#387ed1", height:"5vh"}}>
                   <b>Sign up Now</b>
                </button>
                </div>


            </div>

        </div>
        );
}

export default OpenAccount;