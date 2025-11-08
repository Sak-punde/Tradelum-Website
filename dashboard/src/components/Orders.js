import React, { useEffect, useState } from "react";
import "./OrdersDashboard.css";

const OrdersDashboard = () => {
  const [orders, setOrders] = useState([]);

  // Fetch orders from backend API
  const fetchOrders = async () => {
    try {
      const res = await fetch("http://localhost:3200/api/orders");
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const totalBuy = orders
    .filter(o => o.orderType === "Buy")
    .reduce((acc, o) => acc + o.quantity * o.price, 0);

  const totalSell = orders
    .filter(o => o.orderType === "Sell")
    .reduce((acc, o) => acc + o.quantity * o.price, 0);

  return (
    <div className="orders-dashboard">
      <h3>Orders Dashboard</h3>

      <div className="summary">
        <div>Total Buy Value: ₹{totalBuy.toFixed(2)}</div>
        <div>Total Sell Value: ₹{totalSell.toFixed(2)}</div>
        <button onClick={fetchOrders}>Refresh</button>
      </div>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Stock</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Price (₹)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <tr key={index}>
                <td>{order.stockName}</td>
                <td style={{ color: order.orderType === "Buy" ? "green" : "red" }}>
                  {order.orderType}
                </td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                <td>{new Date(order.createdAt).toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No orders available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersDashboard;
