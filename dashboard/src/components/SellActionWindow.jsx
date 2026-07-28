import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
// import axios from 'axios'
import api from "../api/axios";

import "./BuyActionWindow.css";


const SellActionWindow = ({ uid, price }) => {
  const [stockQuantity, setStockQuantity] =useState(1);
  const [stockPrice, setStockPrice] =useState(0.0);
  const { closeSellWindow } = useContext(GeneralContext);
  const total = (stockQuantity * price).toFixed(2);
  

  const handleSellClick = ()=>{
    api.post("/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL"
    });

    api.post("/sell", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
    })

    closeSellWindow();
  }

  const handleCancelClick = () => {
    closeSellWindow();
  };
  

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e)=>setStockQuantity(e.target.value)}
              value = {stockQuantity}

            />
          </fieldset>
          <fieldset>
            <legend style={{color:"black"}}>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e)=>setStockPrice(e.target.value)}
              value = {total}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required {price}</span>
        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;