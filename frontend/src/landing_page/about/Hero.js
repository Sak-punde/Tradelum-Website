import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-3 text-center">
          We brought transparency to trading.
          <br />
          Now, we’re delivering innovation that empowers your financial journey.
        </h1>
        <div className="row p-5 mt-5 border-top text-muted ">
          <div className="col-6 p-5">
            <p>
              We launched Tradelum with a simple mission — to eliminate the
              complexities and barriers faced by everyday traders and investors
              in India. Founded with the vision to blend transparency,
              affordability, and technology, the name Tradelum reflects our
              belief in weaving a seamless trading experience for everyone.
            </p>
            <p>
              Today, Tradelum is emerging as a reliable platform for smart
              investors, offering an intuitive ecosystem of tools that simplify
              investing and trading — with zero hidden charges and maximum user
              control.
            </p>
            <p>
              With a rapidly growing community of users, we’re empowering the
              next generation of retail investors, one trade at a time.
            </p>
            </div>
            <div className="col-6 p-5">
              <p>
                At Tradelum, we believe that knowledge is the most powerful
                investment. That’s why we run a range of free, open educational
                initiatives and foster a growing community of retail traders and
                investors through accessible learning platforms, webinars, and
                forums.</p>
                <p>
                 We’re also committed to the growth of India’s financial
                ecosystem. Through our innovation arm, we support and
                collaborate with emerging fintech ideas that align with our
                mission to make the capital markets more inclusive and
                transparent. But we’re not stopping there.</p>
                 <p>
                 We’re constantly building, experimenting, and launching new features to enhance
                your trading experience. Check out our latest updates,
                behind-the-scenes insights, and product philosophies on our 
                <a href=" " style={{textDecoration:"none"}}>Tradelum blog</a>— and discover what’s next in the world of modern
                trading.</p>
              
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
