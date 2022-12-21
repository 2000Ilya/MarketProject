import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CartPage from "./pages/CartPage/CartPage";
import MainPage from "./pages/MainPage/MainPage";
import OrderPage from "./pages/OrderPage/OrderPage";

import "./Market.css";

const Market = () => {
  return (
    <Router>
      <div className="market">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* </Route> */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Market;
