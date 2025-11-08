import React from 'react';

function Pricing() {
    return (
        <div className='container'>
          <div className='row' >
            <div className='col-4'>
            
                <h1 className='mb-3 fs-2'>Dynamic Pricing</h1>
                
                <p>"We redefined digital commerce with transparent pricing and zero guesswork — flat, fair, and future-ready."</p>
                   <a href='' className='mx-2' style={{textDecoration:"none"}}>See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
             <div className='col-2'></div>
              <div className='col-6'>
                <div className='row text-center'>
                <div className='col p-3 border'>
                    <h1 className='mb-3'>₹0</h1>
                    <p>Free Product Listings & Direct Vendor Connections</p>
                </div>
                <div className='col p-3 border'>
                    <h1>₹30</h1>
                    <p>Intraday & F&O Simplified — Fast Execution. Zero Confusion</p>
            </div>
          </div>
        </div>
              </div>
            </div>     
        
      );
}

export default Pricing;