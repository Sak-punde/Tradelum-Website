import React from "react";

function Hero() {
  return (
    <div className="container  ">
      <div className="row p-5 mt-5 border-bottom text-center ">
        <h1>Rate</h1>
        <h3 className="text-muted fs-5">Complete list of all fees and taxes</h3>
      </div>
      <div className="row p-5 mt-5">
        <div className="col-md-4 p-4 text-center">
          <img
            src="media/pricingEquity.svg"
            className="img-fluid mb-3"
            alt="Equity Pricing"
          />
          <h2 className="fs-4">₹0 Charges on Delivery Trades</h2>
          <p className="text-muted">
            0% free equity delivery, no hidden fees, no brokerage.
          </p>
        </div>

        <div className="col-md-4 p-4 text-center">
          <img
            src="media/intradayTrades .svg"
            className="img-fluid mb-3"
            alt="Intraday Trades"
          />
          <h2 className="fs-4">Flat ₹20 Intraday & F&O</h2>
          <p className="text-muted">
            Just ₹20 or 0.03% per executed order. Options? Always ₹20.
          </p>
        </div>

        <div className="col-md-4 p-4 text-center">
          <img
            src="media/pricing0.svg"
            className="img-fluid mb-3"
            alt="Mutual Fund Pricing"
          />
          <h2 className="fs-4">₹0 Commission. ₹0 DP Charges.</h2>
          <p className="text-muted">
            All direct mutual fund investments are 100% free.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
