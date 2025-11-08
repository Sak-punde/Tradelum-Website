import React from 'react';


function Awards() {
    return ( 
        <div classname='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='/media/largestBroker.svg' className='mr-4'/>
                </div>
                <div className='col-6 p-5 '>
                    
                    <h1>Stock Stars of India</h1>
                    <p>India trades smarter with Tradelum—contributing to 15% of daily market volumes:</p>
                     <div className='row'>
                        <div className='col-6'> <ul>
                        <li>
                            <p>Futures & Options (F&O)</p>
                        </li>
                        <li>
                            <p>Foreign Exchange Contracts</p>
                        </li>
                        <li>
                            <p>Commodity Contracts</p>
                        </li>
                    </ul></div>
                        <div className='col-6'><ul>
                        <li>
                            <p>Initial Public Offerings (IPOs)</p>
                        </li>
                        <li>
                            <p>Mutual Fund Investments</p>
                        </li>
                        <li>
                            <p>Bonds & Government Securities</p>
                        </li>
                    </ul></div>
                     </div>
                    <img src='media/pressLogos.png' style={{Width:"90%"}}/>
                </div>
            </div>

        </div>
     );
}

export default Awards;