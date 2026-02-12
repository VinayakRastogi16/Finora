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
            <p>
              That's why 1.6+ crore customers trust Zerodha <br />with ~ ₹6 lakh
              crores of equity investments,<br /> making us India’s largest broker;
              contributing <br /> to 15% of daily retail exchange volumes in <br /> India.
            </p>
          </div>

          <div className="mb-5">
            <h5 className="mb-3">No spam or gimmicks</h5>
            <p>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. <br /> 
              <span className="email"><a style={{textDecorationLine:"none"}} href="/">Our
              philosophies.</a></span>
            </p>
          </div>

          <div className="mb-5">
            <h5 className="mb-3">The Zerodha universe</h5>
            <p>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div className="mb-5">
            <h5 className="mb-3">Do better with money</h5>
            <p>
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money
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
