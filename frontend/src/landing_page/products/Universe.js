import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row p-5 text-center mt-5">
        <h1 className="mb-4">The Tradelum Universe</h1>
        <p >
          Discover smarter tools, deeper insights, and new opportunities—only
          with TradeLum and our partners."
        </p>
       <div className="container text-center my-5">
  <div className="row">
    <div className="col-md-4 p-4">
      <img src="media/Fund.png" className="mb-3" style={{ height: "60px" }} alt="Fund" />
      <h5>Fund House</h5>
      <p className="text-muted small">
        Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
      </p>
    </div>
    <div className="col-md-4 p-4">
      <img src="media/sensibullLogo .svg" className="mb-3" style={{ height: "60px" }} alt="Sensibull" />
      <h5>Sensibull</h5>
      <p className="text-muted small">
        Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
      </p>
    </div>
    <div className="col-md-4 p-4">
      <img src="media/goldenpiLogo .png" className="mb-3" style={{ height: "60px" }} alt="Goldenpi" />
      <h5>Goldenpi</h5>
      <p className="text-muted small">
        Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
      </p>
    </div>
  </div>

  <div className="row">
    <div className="col-md-4 p-4">
      <img src="media/streakLogo.png" className="mb-3" style={{ height: "60px" }} alt="Streak" />
      <h5>Streak</h5>
      <p className="text-muted small">
        Systematic trading platform that allows you to create and backtest strategies without coding.
      </p>
    </div>
    <div className="col-md-4 p-4">
      <img src="media/smallcaseLogo.png" className="mb-3" style={{ height: "60px" }} alt="Smallcase" />
      <h5>Smallcase</h5>
      <p className="text-muted small">
        Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
      </p>
    </div>
    <div className="col-md-4 p-4">
      <img src="media/dittoLogo.png" className="mb-3" style={{ height: "60px" }} alt="Ditto" />
      <h5>Ditto</h5>
      <p className="text-muted small">
        Personalized advice on life and health insurance. No spam and no mis-selling.
      </p>
    </div>
  </div>
</div>
<button className='p-2 btn fs-5' style={{width:"20%", margin:"0 auto", backgroundColor: 'goldenrod', color: 'white'}}>
  Signup Now
</button>
</div>
</div>

  
  

  );
}

export default Universe;
