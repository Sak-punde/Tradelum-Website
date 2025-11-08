import React from 'react';
function Hero() {
    return (
        <div className='container p-5'>
          <div className='row text-center'>
             <img src="media/TradelumHero.png" alt="Hero Image" height='400px' style={{width:'100%'}} className='mb-5' />
             <h1 className='mt-4'>Invest smart. Grow fast</h1>
             <p>Simple, secure, and seamless solutions for your digital future</p>
             <button className='p-2 btn btn-primary fs-5' style={{width:"20%",margin:"0 auto",backgroundColor: 'goldenrod', color: 'white'}}>Signup Now</button>
             </div> 
          </div>
      );
}

export default Hero;