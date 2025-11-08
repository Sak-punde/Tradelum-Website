import React from 'react';

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore,}) 
{
    return ( 
       <div className='container'>
        <div className='row p-5'>
            <div className='col-6 p-5 mt-5'>
                <img src={imageURL} style={{width:"100%",height:"100%"}}/>
            </div>
            <div className='col-6 p-5 mt-6'>
                <h1>{productName}</h1>
                <p className='fs-5'>{productDescription}</p>
                <div className='mt-3'>
                <a href={tryDemo} style={{textDecoration:'none'}}>Try Demo  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a href={learnMore} style={{marginLeft:"50px",textDecoration:'none'}}>Learn More  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                
            <div className='mt-3 mb-5 '>
                <a href={googlePlay}><img src="media/googlePlayBadge .svg"  style={{marginRight:"15px"}}/></a>
            
        
                <a href={appStore}><img src="media/appstoreBadge .svg" style={{marginRight:"15px"}}/></a>
                </div>
        </div>
       </div>
       </div>
     );
}

export default LeftSection;