import React from "react";

function Footer() {
  return (
    <div style={{ backgroundColor: "#FBFBFB", borderTop: "1px solid #EEEEEE", paddingTop:"3%" }}>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img
              style={{ margin: "10% 0 5% 0", width: "80%" }}
              src="media/images/logo.svg"
              alt="logo"
              
            />
            <p style={{ fontSize: "x-small" }}>
              © 2010 - 2026, Zerodha Broking <br /> Ltd.
              <br />
              All rights reserved.
            </p>
            <div
              className="col"
              style={{
                fontWeight: "bold",
                fontSize: "1.3rem",
                marginLeft: "0px",
              }}
            >
              <i
                style={{ marginLeft: "0px" }}
                class="fa-brands icons fa-x-twitter"
              ></i>
              <i
                style={{ marginLeft: "10%" }}
                class="fa-brands icons fa-square-facebook"
              ></i>
              <i
                style={{ marginLeft: "10%" }}
                class="fa-brands icons fa-instagram"
              ></i>
              <i
                style={{ marginLeft: "10%" }}
                class="fa-brands icons fa-linkedin-in"
              ></i>
              <p><hr /></p>
            </div>
            
            <div
              className="d-flex col"
              style={{
                fontWeight: "bold",
                fontSize: "1.3rem",
                marginLeft: "0px",
              }}
            >
              <i style={{ marginLeft: "0px" }} class="fa-brands icons fa-youtube"></i>
              <i
                style={{ marginLeft: "10%" }}
                class="fa-brands icons fa-whatsapp"
              ></i>
              <i
                style={{ marginLeft: "10%" }}
                class="fa-brands icons fa-telegram"
              ></i>
            </div>
          </div>
          <div className="col mt-4 mb-5 " style={{marginLeft:"5%"}}>
            <h3 className="heading">Account</h3>
            <a href="/" className="hover">Open demat account</a> <br/><br />
            <a href="/" className="hover">Minor demat account</a> <br/><br />
            <a href="/" className="hover">NRI demat account</a> <br/><br />
            <a href="/" className="hover">Commodity</a> <br/><br />
            <a href="/" className="hover">Dematerialisation</a> <br/><br />
            <a href="/" className="hover">Fund Transfer</a> <br/><br />
            <a href="/" className="hover">MTF</a> <br/><br />
            <a href="/" className="hover">Referral Program</a>
          </div>
          <div className="col mt-4 ">
            <h3 className="heading">Support</h3>
            <a href="/" className="hover">Contact us</a> <br/><br />
            <a href="/" className="hover">Support portal</a> <br/><br />
            <a href="/" className="hover">How to file a complaint?</a> <br/><br />
            <a href="/" className="hover">Status of your complaints</a> <br/><br />
            <a href="/" className="hover">Bulletin</a> <br/><br />
            <a href="/" className="hover">Circular</a> <br/><br />
            <a href="/" className="hover">Z-Connect blog</a> <br/><br />
            <a href="/" className="hover">Downloads</a>
          </div>
          <div className="col mt-4 ">
            <h3 className="heading">Company</h3>
            <a href="/" className=" hover">About</a> <br/><br />
            <a href="/" className=" hover">Philosophy</a> <br/><br />
            <a href="/" className=" hover">Press & media</a> <br/><br />
            <a href="/" className=" hover">Careers </a> <br/><br />
            <a href="/" className=" hover">Zerodha Cares (CSR)</a> <br/><br />
            <a href="/" className=" hover">Zerodha.tech</a> <br/><br />
            <a href="/" className=" hover">Open Source</a>
          </div>
          <div className="col mt-4 ">
            <h3 className="heading">Quick Links</h3>
            <a href="/"  className="hover">Upcoming IPOs</a> <br/><br />
            <a href="/" className="hover">Brokerage charges</a> <br/><br />
            <a href="/" className="hover">Market holidays</a> <br/><br />
            <a href="/" className="hover ">Economic calendar </a> <br/><br />
            <a href="/" className="hover">Calculators</a>  <br/><br />
            <a href="/" className="hover">Markets</a> <br/><br />
            <a href="/" className="hover">Sectors</a> <br/>
          </div>
        </div>
        <div className="footer-text">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
            Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
            560078, Karnataka, India. For any complaints pertaining to
            securities broking please write to <span className="email">complaints@zerodha.com</span>, for DP
            related to <span className="email">dp@zerodha.com</span>. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
            <br />
            <br />
            Procedure to file a complaint on <span className="email">SEBI SCORES:</span> Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
            <br />
            <br />
            <span className="email">Smart Online Dispute Resolution | Grievances Redressal Mechanism</span>
            <br />
            <br />
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
            <br />
            <br />
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
            <br />
            <br />
            India's largest broker based on networth as per NSE. NSE broker
            factsheet
            <br />
            <br />
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
            <br />
            <br />
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>

          <br />
        </div>
      </div>
    </div>
  );
}

export default Footer;
