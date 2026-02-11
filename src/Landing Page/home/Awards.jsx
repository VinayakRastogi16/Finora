import React from 'react'

function Awards() {
    return ( <>
        <div className='container mt-5 mb-5'>
            <div className="row row-cols-md-6">
                <div className="col-lg-6 d-none d-lg-block">
                    <img
                        src="media/images/largestBroker.svg"
                        alt="largestBrokerImage"
                    />
                </div>
                <div className="col-lg-6 col-md-12 mt-lg-2 mt-sm-5 ">
                    <h1>Largest stock broker in India</h1>
                    <p >2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                        
                    </p>
                    <div className='row mt-5 '>
                        <div className="col-lg-6 col-md-6">
                            <ul>
                            <li><p>Features and Options</p></li>
                            <li><p>Commodity derevatives</p></li>
                            <li><p>Currency derivatives</p></li>
                            
                    </ul>
                        </div>

                    <div className=" col-lg-6 col-md-6">
                        <ul>
                            <li><p>Stocks & IPOs</p></li>
                            <li><p>Direct mutual funds</p></li>
                            <li><p>Bonds and</p></li>
                    </ul>
                    </div>   

                    <img className='mt-4' src="media/images/pressLogos.png" alt="presslogos" /> 
                    </div>
                    

                </div>
            </div>
        </div>
    </> );
}

export default Awards;