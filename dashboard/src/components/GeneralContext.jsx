import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow"

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  openSellWindow: (uid, price) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };
  const handleOpenSellWindow = (uid,price) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedStockPrice(price);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };


  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,

      }}
    >
      {props.children}
      {(isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />) || (isSellWindowOpen && <SellActionWindow uid={selectedStockUID} price={selectedStockPrice} />)}
    </GeneralContext.Provider>

  );
};

export default GeneralContext;