import React from 'react';

function RightSection({imageURL, productName, productDescription,learnMore })
     {
    return ( 
        <div className='container'>
        <div className='row p-5'>
            <div className='col-6 p-5 mt-5'>
                <h1>{productName}</h1>
                <p className='fs-5'>{productDescription}</p>
                <div className='mt-5'>
                <a href={learnMore} style={{textDecoration:'none'}}>Learn More  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className='col-6'>
                <img src={imageURL} style={{width:"100%",height:"100%"}}/>
                             </div>
            </div>
        </div>
            
    
     );
}

export default RightSection;