/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Brokerage from "./Brokerage";
import Hero from "./Hero";
import Tables from "./Table";

function PricingPage() {
  return (
    <>
      <Hero />
      <Tables
        heading="Charges for account opening"
        theading1="Type of account"
        theading2="Charges"
        td1="Online account"
        td2={
          <button
            style={{ backgroundColor: "green" }}
            disabled
            className="btn btn-success btn-sm"
          >
            Free
          </button>
        }
        td3="Offline account"
        td4={
          <button
            style={{ backgroundColor: "green" }}
            disabled
            className="btn btn-success btn-sm"
          >
            Free
          </button>
        }
        td5="NRI account (offline only)"
        td6="₹ 500"
        td7="Partnership, LLP, HUF, or Corporate accounts (offline only)"
        td8="₹ 500"
        tr1={
          <tr>
            <td style={{ backgroundColor: "#e2e2e22f" }}>
              Partnership, LLP, HUF, or Corporate accounts (offline only)
            </td>
            <td style={{ backgroundColor: "#e2e2e22f" }}> ₹ 500</td>
            <td style={{backgroundColor:'#e2e2e22f'}}></td>
          </tr>
        }
      />
      <Tables
        heading="Demat AMC (Annual Maintenance Charge)"
        theading1="Value of holdings"
        theading2="	AMC"
        td1="Up to ₹4 lakh"
        td2={
          <button
            style={{ backgroundColor: "green" }}
            disabled
            className="btn btn-success btn-sm"
          >
            *Free
          </button>
        }
        td3="₹4 lakh - ₹10 lakh"
        td4="	₹ 100 per year, charged quarterly*"
        td5="Above ₹10 lakh"
        td6="₹ 300 per year, charged quarterly"
        para={
          <p style={{ fontSize: "x-small", marginLeft: "15%" }}>
            * Lower AMC is applicable only if the account qualifies as a Basic
            Services Demat Account (BSDA). BSDA account holders cannot hold more
            than one demat account. To learn more about BSDA, <br />{" "}
            <a className="email" href="#">
              click here.
            </a>
          </p>
        }
      />
      <Tables
        heading="Charges for optional value added services"
        theading1="Service"
        theading2="	Billing Frquency"
        theading3='Charges'
        td1="Tickertape"
        td2='Monthly / Annual'
        td10='Free: 0 | Pro: 249/2399'
        td3="Smallcase"
        td4="Per transaction"
        td11='Buy & Invest More: 100 | SIP: 10'
        td5="Kite Connect"
        td6="Monthly"
        td12='Connect: 500 | Personal: Free'
      />
      <Brokerage />
    </>
  );
}

export default PricingPage;
