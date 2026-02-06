import React from 'react'


function Pricing() {
    return ( 
        <div className='container mb-5' style={{marginTop:"25vh"}}>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mt-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>

                    <a style={{textDecorationLine:"none"}} href="/"><b>See Pricing</b> <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="col-2"></div>
                <div className='col-6 d-flex'>
                    <div className="col-3 border " style={{width:"50%", textAlign:"center", paddingTop:"2%"}}>
                        <h1>&#8377; 0</h1>
                        <p className='pt-4'>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className="col-3 border " style={{ width:"50%",textAlign:"center", paddingTop:"2%"}}>
                        <h1>&#8377; 20</h1>
                        <p className='pt-4'>Intraday and F&O</p>
                    </div>

                </div>
            </div>
            <div></div>
        </div>
     );
}

export default Pricing;