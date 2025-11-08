import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

/*import NavBar from './NavBar';
import Footer from './Footer';*/

function ProductPage() {
  return (
    <>
      <Hero />({})
      <LeftSection
        imageURL="media/Drift.png"
        productName="Drift"
        productDescription="Drift – Our lightning-fast flagship trading platform delivering real-time market data, intelligent charts, and a clean, intuitive interface. Trade effortlessly anytime, anywhere with seamless support on Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/Console.png"
        productName="Console"
        productDescription="Buy direct mutual funds online with no middlemen and zero commission, delivered straight to your Demat account. Experience smooth, secure investing with the Tradelum app — available on both Android and iOS."
        learnMore=""
      />
      <LeftSection
        imageURL="media/Coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online with no middlemen and zero commission, delivered straight to your Demat account. Experience smooth, secure investing with the Tradelum app — available on both Android and iOS."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/Apis.png"
        productName="Drift Connect API"
        productDescription="Leverage our lightning-fast HTTP/JSON APIs to create innovative trading and investment platforms. Whether you're a startup or an independent developer, launch your app seamlessly and showcase it to our active, growing clientbase."
        learnMore=""
      />
      <LeftSection
        imageURL="media/Varsity.png"
        productName="Varsity Mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center fs-5">
        Want to know more about our technology stack? Check out the
       <a href="" style={{textDecoration:'none'}}>Tradelum.tech</a>  blog. 
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;
