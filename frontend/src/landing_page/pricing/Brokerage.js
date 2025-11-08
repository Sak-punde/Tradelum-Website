
import React, { useState } from "react";

const BrokerageCalculator = () => {
  const [segment, setSegment] = useState("equity");
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [brokerage, setBrokerage] = useState(null);

  const calculateBrokerage = () => {
    const buy = parseFloat(buyPrice);
    const sell = parseFloat(sellPrice);
    const qty = parseInt(quantity);
    if (isNaN(buy) || isNaN(sell) || isNaN(qty)) {
      alert("Please enter valid numbers");
      return;
    }

    const turnover = (buy + sell) * qty;
    let brokerageFee = 0;

    switch (segment) {
      case "equity":
        brokerageFee = 0; // Delivery is free in Zerodha
        break;
      case "intraday":
        brokerageFee = Math.min(20, 0.0003 * turnover);
        break;
      case "fno":
        brokerageFee = Math.min(20, 0.0003 * turnover);
        break;
      case "commodity":
        brokerageFee = Math.min(20, 0.0003 * turnover);
        break;
      default:
        brokerageFee = 0;
    }

    const stt = 0.001 * sell * qty;
    const exchangeTxn = 0.0000325 * turnover;
    const gst = 0.18 * (brokerageFee + exchangeTxn);
    const sebi = 0.000001 * turnover;
    const stamp = 0.00015 * buy * qty;

    const totalCharges = brokerageFee + stt + exchangeTxn + gst + sebi + stamp;
    const profitLoss = (sell - buy) * qty - totalCharges;

    setBrokerage({
      brokerageFee,
      stt,
      exchangeTxn,
      gst,
      sebi,
      stamp,
      totalCharges,
      profitLoss,
    });
  };

  return (
    <div className="brokerage-calculator">
      <h2>Tradelum Brokerage Calculator</h2>
      <div className="segment-selector">
        {["equity", "intraday", "fno", "commodity"].map((seg) => (
          <button
            key={seg}
            className={segment === seg ? "active" : ""}
            onClick={() => setSegment(seg)}
          >
            {seg.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="inputs">
        <input
          type="number"
          placeholder="Buy Price"
          value={buyPrice}
          onChange={(e) => setBuyPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Sell Price"
          value={sellPrice}
          onChange={(e) => setSellPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={calculateBrokerage}>Calculate</button>
      </div>

      {brokerage && (
        <div className="results">
          <h3>Breakup of Charges</h3>
          <p>Brokerage: ₹{brokerage.brokerageFee.toFixed(2)}</p>
          <p>STT: ₹{brokerage.stt.toFixed(2)}</p>
          <p>Exchange Transaction: ₹{brokerage.exchangeTxn.toFixed(2)}</p>
          <p>GST: ₹{brokerage.gst.toFixed(2)}</p>
          <p>SEBI Charges: ₹{brokerage.sebi.toFixed(2)}</p>
          <p>Stamp Duty: ₹{brokerage.stamp.toFixed(2)}</p>
          <h4>Total Charges: ₹{brokerage.totalCharges.toFixed(2)}</h4>
          <h4
            style={{
              color: brokerage.profitLoss >= 0 ? "green" : "red",
            }}
          >
            Net P&L: ₹{brokerage.profitLoss.toFixed(2)}
          </h4>
        </div>
      )}
    </div>
  );
};

export default BrokerageCalculator;
