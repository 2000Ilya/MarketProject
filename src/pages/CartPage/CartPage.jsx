import React from "react";
import CartForm from "../../components/CartForm/CartForm";
import CartItem from "../../components/CartItem/CartItem";
import NavBack from "../../components/NavBack/NavBack";

import "./CartPage.css";

const cartProducts = [
  {
    name: "Charles Simon Brut Supreme, 0.75 л",
    imgSrc: "champagne1.png",
    price: 3690,
    salePrice: 4100,
    category: "champagne",
    parameters: {
      country: "Франция",
      type: "Сухое",
      toxicity: "12%",
      volume: "0.75 л",
    },
  },
  {
    name: "Neft, black barrel, 0.7 л",
    imgSrc: "strong1.png",
    price: 3600,
    salePrice: 6000,
    category: "strong",
    parameters: {
      country: "Австрия",
      type: "Классическая",
      toxicity: "40%",
      volume: "0.7 л",
    },
  },
  {
    name: "Corona Extra, 0.355 л",
    imgSrc: "beer1.png",
    price: 154,
    salePrice: 220,
    category: "beer",
    parameters: {
      country: "Мексика",
      type: "Светлое",
      toxicity: "4.5%",
      volume: "0.355 л",
    },
  },
];

function CartPage({}) {
  return (
    <div className="cart-page">
      <div className="cart-page__content">
        <NavBack text={"Назад"} linkTo={"/"} />
        <div className="cart-page__mid-group">
          <div className="cart-page__products-group">
            {cartProducts &&
              cartProducts.map((product) => <CartItem {...product} />)}
          </div>
          <CartForm quantity={0} resultPrice={0} />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
