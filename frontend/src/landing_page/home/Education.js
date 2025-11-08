import React, { PureComponent } from 'react';
function Education() {
    return ( 
       <div className='container mt-5'>
        <div className='row'>
            <div className='col-6'>
                <img src='media/education%20.svg' className='mr-4' style={{width:"70%"}}/>
         </div>
         
         <div className='col-6'>
            <h1 className='mb-3 fs-2'>No Paywalls, Just Potential.</h1>
                <p> India’s most comprehensive stock market learning platform, built for beginners and pros alike — covering everything from market fundamentals to expert trading insights.</p>
                   <a href='' className='mx-2' style={{textDecoration:"none" }}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
           <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href='' className='mx-2' style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
         </div>
        </div>
     
     );
}

export default Education;