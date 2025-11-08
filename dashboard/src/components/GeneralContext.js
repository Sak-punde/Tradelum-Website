import React, { useState, useCallback } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
  refreshOrders: () => {},
  ordersRefreshKey: 0,
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  // 🔹 Added for refreshing orders
  const [ordersRefreshKey, setOrdersRefreshKey] = useState(0);

  // ✅ Function to trigger a refresh in the Orders Dashboard
  const refreshOrders = useCallback(() => {
    setOrdersRefreshKey((prev) => prev + 1);
  }, []);

  // ✅ BUY window functions
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  // ✅ SELL window functions
  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
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
        refreshOrders,       // 🔹 Added
        ordersRefreshKey,    // 🔹 Added
      }}
    >
      {props.children}

      {/* Render Buy Window */}
      {isBuyWindowOpen && (
        <BuyActionWindow
          uid={selectedStockUID}
          onClose={handleCloseBuyWindow}
        />
      )}

      {/* Render Sell Window */}
      {isSellWindowOpen && (
        <SellActionWindow
          uid={selectedStockUID}
          onClose={handleCloseSellWindow}
        />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
