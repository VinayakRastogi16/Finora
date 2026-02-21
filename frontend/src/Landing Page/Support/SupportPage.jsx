/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CreateTicket from "./CreateTicket";
import Hero from "./Hero";

function SupportPage() {
  return (
    <>
      <CreateTicket />
      <Hero
        icon={<i class="fa-solid fa-circle-plus"></i>}
        heading="Account Opening"
        l1={<li>Residint individual</li>}
        l2={<li>Minor</li>}
        l3={<li>Non Resident Indian (NRI)</li>}
        l4={<li>Company, Partnership, HUF and LLP</li>}
        l5={<li>Glossary</li>}
        collapse="#AO"
        collapseId="AO"
        col4Li1={<a href=""><li>Latest Intraday leverages and <br /> Square-off timings</li></a>}
        col4Li2={<a href=""><li>Surveillance measure on scrips - <br /> February 2026</li></a>}
      />
      <Hero
        icon={<i class="fa-solid fa-circle-user"></i>}
        heading="Your Zerodha Account"
        l1={<li>Your profile</li>}
        l2={<li>Account modification</li>}
        l3={<li>Client Master Report (CMR) and Depository Participant (DP)</li>}
        l4={<li>Nomination</li>}
        l5={<li>Transfer and conversion of securities</li>}
        collapse="#YZA"
        collapseId="YZA"
      />
      <Hero
        icon={<i class="fa-solid fa-arrow-right"></i>}
        heading="Kite"
        l1={<li>IPO</li>}
        l2={<li>Trading FAQs</li>}
        l3={<li>Margin Trading Facility (MTF) and Margins</li>}
        l4={<li>Charts and orders</li>}
        l5={<li>Alerts and Nudges</li>}
        l6={<li>General</li>}
        collapse="#KITE"
        collapseId="KITE"
      />
      <Hero
        icon={<i class="fa-solid fa-indian-rupee-sign"></i>}
        heading="Funds"
        l1={<li>Add money</li>}
        l2={<li>Withdraw money</li>}
        l3={<li>Add bank accounts</li>}
        l4={<li>eMandates</li>}
        collapse="#FUNDS"
        collapseId="FUNDS"
      />
      <Hero
        icon={<i class="fa-solid fa-chart-pie"></i>}
        heading="Console"
        l1={<li>Portfolio</li>}
        l2={<li>Corporate actions</li>}
        l3={<li>Funds statement</li>}
        l4={<li>Reports</li>}
        l5={<li>Profile</li>}
        l6={<li>Segments</li>}
        collapse="#CON"
        collapseId="CON"
      />
      <Hero
        icon={<i class="fa-solid fa-coins"></i>}
        heading="Coin"
        l1={<li>Mutual funds</li>}
        l2={<li>National Pension Scheme (NPS)</li>}
        l3={<li>Fixed Deposit (FD)</li>}
        l4={<li>Features on Coin</li>}
        l5={<li>Payments and Orders</li>}
        l6={<li>General</li>}
        collapse="#COIN"
        collapseId="COIN"
      />

    </>
  );
}

export default SupportPage;
