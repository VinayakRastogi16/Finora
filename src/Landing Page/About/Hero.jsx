import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container-lg mb-5">
      <div className="row p-5 mb-5">
        <h3 className="text-center fs-4  mt-5  lh-lg">
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </h3>
      </div>
      <div className="row mt-5 p-4 border-top text-muted">
        <div className="col-6 mt-5">
          <p style={{fontSize:"medium", lineHeight:"1.8rem"}}>
            We kick-started operations on the 15th of August, 2010 <br /> with the goal
            of breaking all barriers that traders and <br /> investors face in India in
            terms of cost, support, and <br /> technology. We named the company
            Zerodha, a<br />  combination of Zero and "Rodha", the Sanskrit word for
            barrier.
            
            </p> 
            <p style={{fontSize:"medium", lineHeight:"1.8rem"}}>Today, our disruptive pricing models and in-house technology
            have made us the biggest stock broker in <br /> India.
            </p>
            
            <p style={{fontSize:"medium", lineHeight:"1.8rem"}}> Over 1.6+ crore clients place billions of orders every year
                <br />
            through our powerful ecosystem of investment <br /> platforms, contributing
            over 15% of all Indian retail <br /> trading volumes.
          </p>
        </div>
        <div className="col-6 mt-5">
          <p className="fs-6 ms-2" style={{fontSize:"medium", lineHeight:"1.8rem"}}>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.</p>
         
          <p className="fs-6 ms-2" style={{fontSize:"medium", lineHeight:"1.8rem"}}> 
            <Link className="email" to='/'>Rainmatter</Link>, our fintech fund and incubator, has invested <br /> in several
            fintech startups with the goal of growing the <br/> Indian capital
            markets.</p> 
           
            <p className="fs-6 ms-2" style={{fontSize:"medium", lineHeight:"1.8rem"}}>
             And yet, we are always up to something new every day. Catch
            up on the latest updates on our blog or see what the media is <Link className="email" to='/'>saying
            about us</Link> or learn more about our <br/> business and product <Link className="email" to='/'>philosophies</Link> .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
