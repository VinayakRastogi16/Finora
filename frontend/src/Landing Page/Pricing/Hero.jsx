import React from "react";

function Hero() {
  return (
    <div className="container-lg mb-5">
      <div className="row text-center mt-5 pt-5">
        <h2 className="fs-3">Charges</h2>
        <h5 className="mt-2" style={{color:"#5e5d5ddc"}}>List of all charges and taxes</h5>
      </div>

      <div className="row mt-5 pt-5 text-center">
        <div className="col-4">
          <img
            className="img-fluid"
            style={{ width: "60%", marginLeft: "15vh", marginTop: "20%" }}
            src="media/images/pricing0.svg"
            alt=""
          />
          <h2 style={{ marginLeft: "12vh" }}>Free equity delivery</h2>
          <p className="lh-lg" style={{ marginLeft: "11.6vh", color:"#5e5d5ddc" }}>
            All equity delivery investments (NSE, BSE),<br /> are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="col-4">
          <img
            className="img-fluid"
            style={{ width: "60%", marginTop: "20%" }}
            src="media/images/intradayTrades.svg"
            alt=""
          />
          <h2>Intraday and F&O trades</h2>
          <p className="lh-lg" style={{color:"#5e5d5ddc"}}>
            Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order on
            intraday trades across <br /> equity, currency, and commodity trades. Flat <br />
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-4">
          <img
            className="img-fluid"
            style={{ width: "60%", marginRight: "15vh", marginTop: "20%" }}
            src="media/images/pricing0.svg"
            alt=""
          />
          <h2 style={{ marginRight: "14vh" }}>Free direct MF</h2>
          <p className="lh-lg" style={{ marginRight: "13.5vh", color:"#5e5d5ddc"}}>
            All direct mutual fund investments are <br /> absolutely free — ₹ 0
            commissions & DP <br /> charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
