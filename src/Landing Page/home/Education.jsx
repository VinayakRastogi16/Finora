import React from 'react'


function Education() {
    return (
         <div className='container mb-5' style={{marginTop:"10%"}}>
            <div className="row">
                <div className="col-6">
                    <img src="media/images/education.svg" style={{width:"70%"}} alt="" />
                </div>
                <div className="col-6">
                    <h3 className='fs-2'>Free and open market education</h3>
                    <p className='mt-5'>Varsity, the largest online stock market education book in the world <br />covering everything from the basics to advanced trading. <br />
                   </p>
                    <a style={{textDecorationLine:"none", margin:"10% 0 20% 0"}} href="/">Versity <i class="fa-solid fa-arrow-right-long"></i></a>

                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in <br /> India for all your market related queries. <br />
                    </p>
                    <a style={{textDecorationLine:"none"}} href="/">TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
         </div>

    );
}

export default Education;
