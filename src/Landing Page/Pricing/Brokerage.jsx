/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Brokerage() {
  return (
    <div className="container-lg mb-5 pb-3">
      <div className="row">
        <h4>Charges explained</h4>
        <div className="col-6 mt-5">
          <h6>Securities/Commodities transaction tax</h6>
          <p className="lh-lg" style={{ fontSize: "small" }}>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy <br /> and sell sides when trading equity
            delivery. Charged only on selling side when trading <br /> intraday
            or on F&O.
            <br /> When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. <br /> Important to keep a tab.
          </p>

          <h6>Transaction/Turnover Charges</h6>
          <p className="lh-lg" style={{ fontSize: "small" }}>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions. <br /> BSE has revised transaction charges in XC, XD,
            XT, Z and ZP groups to ₹10,000 per crore <br /> w.e.f 01.01.2016.
            (XC and XD groups have been merged into a new group X w.e.f
            01.12.2017)
            <br /> BSE has revised transaction charges in SS and ST groups to
            ₹1,00,000 per crore of gross <br /> turnover. <br /> BSE has revised
            transaction charges for group A, B and other non exclusive scrips
            (non- <br />
            exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore
            of turnover on flat rate <br /> basis w.e.f. December 1, 2022.{" "}
            <br /> BSE has revised transaction charges in M, MT, TS and MS
            groups to ₹275 per crore of gross <br />
            turnover.
          </p>

          <h6>Call & trade</h6>
          <p className="lh-lg" style={{ fontSize: "small" }}>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including <br /> auto square off orders.
          </p>

          <h6>Stamp charges</h6>
          <p className="lh-lg" style={{ fontSize: "small" }}>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 <br /> for transacting in instruments on the stock exchanges
            and depositories.
          </p>
          <h6>NRI brokerage charges</h6>
          <ul style={{ fontSize: "small" }}>
            <li>
              For a non-PIS account, 0.5% or ₹50 per executed order for equity
              and F&O (whichever is <br /> lower).
            </li>
            <li>
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              ₹500 + GST as yearly account maintenance charges (AMC) charges.
            </li>
          </ul>
          <h6>Account with debit balance</h6>
          <p className="lh-lg" style={{ fontSize: "small" }}>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order <br /> instead of ₹20 per executed order.
          </p>
          <h6>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h6>
          <ul className="lh-lg" style={{ fontSize: "small" }}>
            <li>
              Equity and Futures - ₹10 per crore + GST of the traded value.
            </li>
            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
            <li>
              Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
              lakh + GST of <br /> premium for Options.
            </li>
          </ul>
          <h6>Margin Trading Facility (MTF)</h6>
          <ul className="lh-lg" style={{ fontSize: "small" }}>
            <li>
              MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
              The interest is applied from T+1 day until the day MTF stocks are
              sold.
            </li>
            <li>
              MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
            </li>
            <li>
              MTF pledge charge: ₹15 + GST per pledge and unpledge request per
              ISIN.
            </li>
          </ul>
        </div>

        <div className="col-6 mt-5">
          <h6>GST</h6>
          <p className="lh-lg" style={{ fontSize: "small" }}>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges <br /> + transaction charges)
          </p>
          <h6>SEBI Charges</h6>
          <p className="lh-lg" style={{ fontSize: "small" }}>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the <br /> markets.
          </p>
          <h6>DP (Depository participant) charges</h6>
          <p className="lh-lg" style={{ fontSize: "small" }}>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading <br /> account ledger when stocks are sold,
            irrespective of quantity. <br /> Female demat account holders (as
            first holder) will enjoy a discount of ₹0.25 per transaction <br />{" "}
            on the CDSL fee. <br /> Debit transactions of mutual funds & bonds
            get an additional discount of ₹0.25 on the CDSL <br /> fee.
          </p>
          <h6>Pledging charges</h6>
          <p className="lh-lg" style={{ fontSize: "small" }}>
            ₹30 + GST per pledge request per ISIN.
          </p>
          <h6>AMC (Account maintenance charges)</h6>
          <p className="lh-lg" style={{ fontSize: "small" }}>
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn <br /> more about BSDA,{" "}
            <a className="email" href="">
              Click here
            </a>{" "}
            <br /> For non-BSDA demat accounts: ₹300/year + 18% GST charged
            quarterly (90 days). To learn <br /> more about AMC,{" "}
            <a className="email" href="">
              Click here
            </a>
          </p>
          <h6>Corporate action order charges</h6>
          <p className="lh-lg" style={{ fontSize: "small" }}>
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through <br /> Console.
          </p>
          <h6>Off-market transfer charges</h6>
          <p className="lh-lg" style={{ fontSize: "small" }}>
            ₹25 per transaction.
          </p>
          <h6>Physical CMR request</h6>
          <p className="lh-lg" style={{ fontSize: "small" }}>
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>
          <h6>Payment gateway charges</h6>
          <p className="lh-lg" style={{ fontSize: "small" }}>
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading <br /> account.{" "}
            <a className="email" href="">
              Learn more
            </a>
            .
          </p>
          <h6>Trading using 3-in-1 account with block functionality</h6>
          <ul className="lh-lg" style={{ fontSize: "small" }}>
            <li>
              <b>Delivery & MTF Brokerage:</b> 0.5% per executed order.
            </li>
            <li>
              <b>Intraday Brokerage:</b> 0.05% per executed order.
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <h6>Disclaimer</h6>
        <p className="lh-lg" style={{fontSize:"small"}}>
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. <br />{" "}
          Brokerage will not exceed the rates specified by SEBI and the
          exchanges. All statutory and regulatory charges will be levied at
          actuals. Brokerage is also charged on expired, exercised, and <br />{" "}
          assigned options contracts. Free investments are available only for
          our retail individual clients. Companies, Partnerships, Trusts, and
          HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery <br />
          brokerage. A brokerage of 0.25% of the contract value will be charged
          for contracts where physical delivery happens. For netted off
          positions in physically settled contracts, a brokerage of 0.1% <br />{" "}
          will be charged.
        </p>
      </div>
    </div>
  );
}

export default Brokerage;
