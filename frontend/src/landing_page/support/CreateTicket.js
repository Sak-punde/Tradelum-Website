import React from "react";

function Ticket() {
  return (
    <div className="container">
      <div className="row p-5 mt-3 mb-3 ">
        <h1 className="fs-5">
          Choose the appropriate category to raise your ticket.
          </h1>
          <div className="col-4 p-5 mt-5 mb-5">
          <h5 className="fs-4">
            <i class="fa fa-plus-circle" aria-hidden="true"style={{ marginRight: "8px"}}></i>
            Create Account
          </h5>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Resident Individual
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            {" "}
            Non Resident Individual
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Minor
          </a>
          <br />
        </div>

<div className="col-4 p-5 mt-5 mb-5">
          <h5 className="fs-4">
            <i class="fa fa-user" aria-hidden="true"style={{ marginRight: "8px"}}></i>
           <span>Tradelum Account</span>
          </h5>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Your Profile
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            {" "}
            Nomination
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Account Modification
          </a>
          <br />
        </div>

<div className="col-4 p-5 mt-5 mb-5">
          <h5 className="fs-4 ">
            <i class="fa fa-bar-chart" aria-hidden="true"style={{ marginRight: "8px"}}></i>
           Drift
          </h5>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
          IPOs
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            {" "}
            Charts and Order
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Trading FAQs
          </a>
          <br />
        </div>
 
 <div className="col-4 p-5 mt-5 mb-5">
          <h5 className="fs-4 ">
            <i class="fa fa-money" aria-hidden="true"style={{ marginRight: "8px"}}></i>
            Tradelum Funds
          </h5>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Add Money
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            {" "}
            Withdraw Money
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Add Bank Account
          </a>
          <br />
        </div>

<div className="col-4 p-5 mt-5 mb-5">
          <h5 className="fs-4 ">
            <i class="fa fa-dot-circle-o" aria-hidden="true"style={{ marginRight: "8px"}}></i>
           Console
          </h5>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Portfolio
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            {" "}
            Profile
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Segments
          </a>
          <br />
        </div>

<div className="col-4 p-5 mt-5 mb-5">
          <h5 className="fs-4 ">
            <i class="fa fa-inr" aria-hidden="true"style={{ marginRight: "8px"}}></i>
           Coin
          </h5>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Mutual Funds(MFs)
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            {" "}
          Payments and Orders
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Features on Coin
          </a>
          <br />
        </div>


        
        

      </div>
    </div>
  );
}

export default Ticket;
