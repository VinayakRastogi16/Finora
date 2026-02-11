import React from 'react'


function Pricing() {
    return ( 
        <div className='container mb-5' style={{marginTop:"15vh"}}>
            <div className='row'>
                <div className='col-lg-4 col'>
                    <h1 className='mt-3 fs-4' style={{fontWeight:"lighter"}}>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>

                    <a style={{textDecorationLine:"none"}} href="/"><b>See Pricing</b> <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-lg-2 col-md-1 col-sm-1'></div>
                
                <div className='col d-flex'>
                    <div className="col border " style={{width:"50%", textAlign:"center", paddingTop:"2%"}}>
                        <h1>&#8377; 0</h1>
                        <p className='pt-4'>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className="col border " style={{ width:"50%",textAlign:"center", paddingTop:"2%"}}>
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