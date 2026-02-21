import React from "react";
import { Link } from 'react-router-dom';

function Universe() {
  return (
    <div className="container-lg mt-5">
      <div className="row text-center pt-5">
        <h1 className="fs-5 mb-5">
          Want to know more about our technology stack? Check out the{" "}
          <a href="#" className="email">
            Zerodha.tech
          </a>{" "}
          blog.
        </h1>

        <h3 className="mt-4 pt-3 fs-4 pb-3">The Zerodha Universe</h3>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row mt-5 text-center d-flex justify-content-center">
        <div className="col-3  px-3">
          <div className="row">
            <img src="media/images/zerodhaFundhouse.png" className="align-items-baseline mb-3 px-5 pb-3" alt="" />
            <p className="text-muted" style={{fontSize:"small"}}>
              Our asset management venture <br /> that is creating simple and
              transparent index <br /> funds to help you save for your goals.
            </p>
          </div>
          <div className="row mt-5">
            <img src="media/images/streakLogo.png"  className="mb-3 px-5 pb-2"  alt="" />
            <p className="text-muted"  style={{fontSize:"small"}}>
              Systematic trading platform <br /> that allows you to create and backtest <br />
              strategies without coding.
            </p>
          </div>
        </div>
        <div className="col-3  px-3">
          <div className="row pb-5">
            <img src="media/images/sensibullLogo.svg" className="mb-3 ms-5 ps-2 " style={{width:"80%", height:"3rem"}}  alt="" />
            <p className="text-muted text-center" style={{fontSize:"small"}}>
              Options trading platform that lets you <br /> create strategies, analyze
              positions, and examine <br /> data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="row ">
            <img src="media/images/smallcaseLogo.png" className="mb-4 mt-4 px-5 py-2"  alt="" />
            <p className="text-muted" style={{fontSize:"small"}}>
              Thematic investing platform <br /> that helps you invest in diversified <br />
              baskets of stocks on ETFs.
            </p>
          </div>
        </div>
        <div className="col-3  px-3">
          <div className="row pb-5">
            <img src="media/images/tijori.svg" style={{height:"4rem", width:"100rem"}}  className="mb-2" alt="" />
            <p className="text-muted" style={{fontSize:"small"}}>
              Investment research platform <br /> that offers detailed insights on
              stocks, <br /> sectors, supply chains, and more.
            </p>
          </div>
          <div className="row">
            <img src="media/images/dittoLogo.png" className="mb-3 ms-5 mt-4 px-5 py-2" style={{width:"15rem", height:"4.5rem"}}  alt="" />
            <p className="text-muted" style={{fontSize:"small"}}>
              Personalized advice on life <br /> and health insurance. No spam <br /> and no
              mis-selling.
            </p>
          </div>
        </div>
        
      </div>
      <div className="row mt-4">
        <Link to='/signup' className="pb-1 mt-4 btn btn-primary mb-5 fs-5 fw-normal btn-hover" style={{width:"20vh", margin:"0 auto", backgroundColor:"#387ed1", height:"5vh"}}>
                   <b>Sign up for free</b>
        </Link>
      </div>
      
    </div>
  );
}

export default Universe;
