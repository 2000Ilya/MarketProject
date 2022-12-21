import React from "react";
import Parameter from "../Parameter/Parameter";
import ControlQuantity from "./ControlQuantity/ControlQuantity";

import "./CartItem.css";

function CartItem({ name, imgSrc, price, quantity, parameters }) {
  return (
    <div className="cart-item__container">
      <img className="cart-item__image" src={imgSrc} />
      <div className="cart-item__content">
        <div className="cart-item__name">{name}</div>
        <div className="cart-item__content__bottom-name">
          <div className="cart-item__parameter-container">
            <div className="cart-item__parameter-container__upper-group">
              <Parameter name={"Страна"} value={parameters.country} />
              <Parameter name={"Тип"} value={parameters.type} />
            </div>
            <div className="cart-item__parameter-container__bottom-group">
              <Parameter name={"Крепость"} value={parameters.toxicity} />
              <Parameter name={"Объем"} value={parameters.volume} />
            </div>
          </div>
          <div className="cart-item__cost-container">
            <div className="cart-item__price">{price}</div>
            <ControlQuantity />
            <div className="cart-item__price">{price * quantity}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
