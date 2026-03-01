/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container-lg border-top align-content-center">
      <div className="row mb-5 mt-5">
        <h3 className="text-center">People</h3>
      </div>
      <div className="row mt-5 ">
        <div className="col-6 text-center ">
          <img
            style={{ borderRadius: "100%", width: "45%" }}
            src="media/images/nithinKamath.jpg"
            alt=""
          />
          <h4 className=" fs-5 text-center pt-3  mb-3">Nithin Kamath</h4>

          <h6 className="text-muted">
            Founder, CEO
          </h6>
        </div>

        <div className="col-5 text-muted mt-3">
          <p className=" lh-lg">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader.
            <br /> Today,
            Zerodha has changed the landscape of the Indian broking <br /> industry.
          </p>
          <p className=" lh-lg">
            He is a member of the SEBI Secondary Market Advisory Committee
            <br /> (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className=" lh-lg">Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <Link className="email" to="/">
              Homepage
            </Link>{" "}/{" "}
            <a className="email" href="#">
              TradingQnA
            </a>{" "}/{" "}
            <a className="email" href="#">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
