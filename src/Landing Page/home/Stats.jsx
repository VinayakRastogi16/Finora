import React from 'react'

function Stats() {
    return ( 
        <div className='container' style={{marginTop:"7%"}}>
            <div className='row'>
                <div className='col-6 '>
                    <div className='mt-5 mb-5'><h1>Trust with confidence</h1></div>

                    <div className='mb-5'><h2 className='mb-3'>Customer-first always</h2>
                    <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p></div>

                    <div className='mb-5'><h2 className='mb-3'>No spam or gimmicks</h2>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p></div>

                    <div className='mb-5'><h2 className='mb-3'>The Zerodha universe</h2>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p></div>

                    <div className='mb-5'><h2 className='mb-3'>Do better with money</h2>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p></div>

                </div>
                <div className='col-6'>
                    <img className='pl-5' style={{width:"96%", margin:"10% 0 0 8%"}} src="media/images/ecosystem.png" alt="" />

                <div className="row" style={{paddingLeft:"22%", marginTop:"7%"}}>
                    <div className="col-6 ">
                        <a className='text-decoration-none '  href="/"><b>Explore our products </b> <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className="col-6 ">
                        <a  className='text-decoration-none  p-5' href="/"><b>Try kite demo </b> <i class="fa-solid fa-arrow-right-long"></i> </a>
                    </div>
                </div>
                    
                    
                </div>
            </div>
        </div>
     );
}

export default Stats;