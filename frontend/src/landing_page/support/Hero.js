import React from "react";

function Hero() {
  return (
    <div className="container-Fluid " id="supportHero">
      <div className=" p-3 mt-5 mb-5" id="supportWrapper">
        <h1 className="fs-3">Support Portal</h1>
        <a href="">Track Tickets</a>
      </div>
      <div className=" row p-3 mt-2 mb-2 ">
        <div className=" col-6 p-3 ">
          <h1 className="fs-3">
            Looking for answers? Browse help topics or create a ticket easily.
          </h1>
          <input placeholder="E.g Why my Order is Rejected" />
          <br />
          <a
            href=""
            className="super-links mt-3 fs-6"
            style={{ marginLeft: "10px" }}
          >
            Track Account Opening
          </a>

          <a
            href=""
            className="super-links  mt-3  fs-6"
            style={{ marginLeft: "10px" }}
          >
            Active Segnement Track
          </a>

          <a
            href=""
            className="super-links  mt-3  fs-6"
            style={{ marginLeft: "10px" }}
          >
            Intrady Margins
          </a>

          <a
            href=""
            className="super-links  mt-3  fs-6"
            style={{ marginLeft: "10px" }}
          >
            Drift User Manual
          </a>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3">Features</h1>
          <ol>
            <li>
              <a href="" style={{ lineHeight: "2.5" }}>
                Current Takeover and Delisting -June 2025
              </a>
            </li>
            <li>
              <a href="" style={{ lineHeight: "2.5" }}>
                Latest Intraday Leverage-MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
