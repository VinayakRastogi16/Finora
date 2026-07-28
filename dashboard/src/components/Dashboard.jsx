import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import api from "../api/axios";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  console.log("Dashboard rendered");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        await api.get(
          "/verify",
          {
            withCredentials: true,
          }
        );

        setLoading(false);
      } catch (err) {
        window.location.href =
          "https://finora-y3fy.netlify.app/login";
      }
    };

    verifyUser();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;