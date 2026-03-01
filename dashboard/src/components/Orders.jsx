import {React, useState, useEffect} from "react";
import axios from "axios"
import { Link } from "react-router-dom";

const Orders = () => {

  const [allOrders, setAllOrders] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/allOrders").then((res)=>{
      setAllOrders(res.data);
    })
  },[])

  return (
    <div className="orders">
      <h3 className="title">Your Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
            
          </tr>

          {allOrders.map((stock, index) => {
            

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
      {allOrders.length === 0 && (
  <div className="no-orders">
    <p>You haven't placed any orders today</p>
    <Link to="/" className="btn">Get started</Link>
  </div>
)}
    </div>
  );
};

export default Orders;



