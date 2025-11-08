import React from 'react';

function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                <h1 className='fs-2 mb-5'>Your Trust. Our Platform.</h1>
                <h2 className='fs-4'>Built for Traders, Trusted by Thousands</h2>
                <p className='text-muted'>That’s why over 6 lakh users rely on Tradelum to manage ₹14crore+ in assets and power a growing share of India’s retail market activity — every single day.</p>
                <h2 className='fs-4'>No Noise. Just Pure Trading.</h2>
                <p className='text-muted'>No distractions, no over-promises. Tradelum delivers clean, powerful tools — without spam, gimmicks, or intrusive notifications. You control the pace.</p>
                <h2 className='fs-4'>The Tradelum Ecosystem</h2>
                <p className='text-muted'>More than just a trading platform. With integrations across market analytics, portfolio insights, education hubs, and fintech tools, we give you a 360° view of your financial growth.</p>
                <h2 className='fs-4'>Smarter Trades, Better Outcomes</h2>
                <p className='text-muted'>From Smart Alerts to Risk Locks, our features are built to help you trade responsibly — not recklessly. At Tradelum, we care about your long-term success.</p>
             </div>


                <div className='col-6 p-5 ' >
                    <img src='media/LumEco.png' style={{width:"100%", height:"400px"}} />
                    <div className='text-center'>
                        <a href='' className='mx-2' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href=''className='mx-2' style={{textDecoration:"none"}} > Try kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                
        </div>
        </div>
     );
}

export default Stats;