import React from "react";
import HeroSection from "./HeroSection";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <HeroSection />
      <LeftSection
        imageUrl="media/images/products-kite.png"
        imageLink="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="https://kite-demo.zerodha.com/dashboard"
        learnMore="#"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
        tryD="Try demo →"
        learn="Learn more →"
      />
      <RightSection
        imageUrl="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="#"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin"
        appStore="https://apps.apple.com/in/app/coin-by-zerodha-mutual-funds/id1392892554"
        learn="Learn more →"
      />

      <LeftSection
        imageUrl="media/images/coin.png"
        productName="Coin"
        imageLink="https://coin.zerodha.com/"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="https://kite-demo.zerodha.com/dashboard"
        learnMore="#"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin"
        appStore="https://apps.apple.com/in/app/coin-by-zerodha-mutual-funds/id1392892554"
        tryD="Coin →"
      />
      <RightSection
        imageUrl="media/images/landing.svg"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="#"
        learn="Kite Connect  →"
        mt="mt-5 pt-4"
      />

      <LeftSection
        imageUrl="media/images/varsity-products.svg"
        productName="Varsity mobile"
        imageLink="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        appStore="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"
        ms="ms-5 ps-5"
        dis="col-1"
      />

      <Universe/>
    </>
  );
}

export default ProductPage;
