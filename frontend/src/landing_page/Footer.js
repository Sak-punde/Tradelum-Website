import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container py-5 border-top">
        <div className="row gy-4">
          <div className="col-md-3">
            <img
              src="media/tradelum_logo_goldrod.svg"
              alt="Tradelum Logo"
              className="footer-logo"
            />
            <p className="footer-copy mt-3">
              <p >
                {" "}
                <i
                  class="fa fa-phone"
                  aria-hidden="true"
                  style={{ marginLeft: "50px" }}
                >
                  9156217848
                </i>
              </p>
              © 2015 - 2025, Tradelum Broking Ltd.
              <br />
              All rights reserved.
            </p>
            <div className="d-flex gap-3 mt-2">
              <a
                href="https://www.linkedin.com/in/sakshi-punde-572217286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/punde2110/profilecard/?igsh=anZ1NXY2YXAzbnY3

"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/share/1YVWGoDPnr/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fa fa-facebook-official"></i>
              </a>
            </div>
          </div>

          <div className="col-md-2">
            <h6 className="footer-title">Company</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Press & Media
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  CSR
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Open Source
                </a>
              </li>
            </ul>
          </div>

         
          <div className="col-md-2">
            <h6 className="footer-title">Support</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Support Portal
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Downloads
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2">
            <h6 className="footer-title">Account</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  Open Demat Account
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Minor Account
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Commodity
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Refer & Earn
                </a>
              </li>
            </ul>
          </div>

          
          <div className="col-md-3 footer-legal">
            <p>
              Tradelum Broking Ltd.: Member of NSE, BSE & MCX – SEBI Reg. no.:
              INZ000031633
              <br />
              Depository: IN-DP-431-2019
              <br />
              Commodity through Tradelum Commodities Pvt. Ltd.
            </p>
            <p>
              Address: #153/154, Dollars Colony, J.P Nagar 4th Phase, Bengaluru
              - 560078, India.
            </p>
            <p>
              For complaints, email:{" "}
              <a href="mailto:complaints@Tradelum.com" className="footer-link">
                complaints@Tradelum.com
              </a> change in this code 
            </p>
          </div>
        </div>

        <div className="text-center mt-4 border-top pt-3 small text-muted">
          Investments in securities are subject to market risks. Please read all
          documents carefully before investing.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
