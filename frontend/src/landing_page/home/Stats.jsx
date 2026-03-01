import React from "react";

function Stats() {
  return (
    <div className="container-lg" style={{ marginTop: "7%" }}>
      <div className="row mx-md-0">
        <div className="col-lg-6 col-md-5 ">
          <div className="mt-5 mb-5">
            <h3> Trust with confidence</h3>
          </div>

          <div className="mb-5">
            <h5 className="mb-3">Customer-first always</h5>
            <p className="lh-lg">
              That's why 1.6+ crore customers trust Zerodha <br className="d-lg-none" />with ~ ₹6 <br  className="d-md-none d-sm-none d-lg-flex"/> lakh
              crores of equity investments,<br className="d-lg-none" /> making us India’s <br  className="d-md-none d-sm-none d-lg-flex"/> largest broker;
              contributing <br className="d-lg-none" /> to 15% of daily retail <br className="d-md-none d-sm-none d-lg-flex" />exchange volumes in <br className="d-lg-none" /> India.
            </p>
          </div>

          <div className="mb-5">
            <h5 className="mb-3">No spam or gimmicks</h5>
            <p className="lh-lg">
              No gimmicks, spam, "gamification", or annoying push <br  className="d-md-none d-sm-none d-lg-flex"/> notifications.
              High quality apps that you use at your <br  className="d-md-none d-sm-none d-lg-flex"/> pace, the way you like. <br className="d-lg-none" /> 
              <span className="email"><a style={{textDecorationLine:"none"}} href="/">Our
              philosophies.</a></span>
            </p>
          </div>

          <div className="mb-5">
            <h5 className="mb-3">The Zerodha universe</h5>
            <p>
              Not just an app, but a whole ecosystem. Our investments <br  className="d-md-none d-sm-none d-lg-flex"/> in 30+
              fintech startups offer you tailored services <br  className="d-md-none d-sm-none d-lg-flex"/> specific to your
              needs.
            </p>
          </div>

          <div className="mb-5">
            <h5 className="mb-3">Do better with money</h5>
            <p>
              With initiatives like Nudge and Kill Switch, we don't just <br  className="d-md-none d-sm-none d-lg-flex"/>
              facilitate transactions, but actively help you do better <br  className="d-md-none d-sm-none d-lg-flex"/> with your
              money.
            </p>
          </div>
        </div>
        <div className=" mt-3 mt-md-5 col-lg-6 col-md-7">
          <img
            src="media/images/ecosystem.png"
            alt="ecosystem"
            className="img-fluid w-100"
            style={{paddingLeft:"10%"}}
            />

          <div className="row" style={{paddingLeft:"22%", marginTop: "7%" }}>
            <div className="col-6">
              <a className="text-decoration-none" href="/">
                Explore our products
                <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
            <div className="col-6 ">
              <a className="text-decoration-none  p-3" href="/">
                Try kite demo 
                <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
