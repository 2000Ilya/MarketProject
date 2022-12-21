import React from "react";
import Button from "../Button/Button";
import Like from "../Icons/Like";
import Parameter from "../Parameter/Parameter";

import "./ProductItem.css";

function ProductItem({ name, imgSrc, price, salePrice, parameters }) {
  return (
    <div className="product-item__container">
      <div className="product-item__top-group">
        <div className="product-item__name">{name}</div>
        <Like />
      </div>
      <img className="product-item__image" src={imgSrc} />
      <div className="product-item__parameter-container">
        <Parameter name={"Страна"} value={parameters.country} />
        <Parameter name={"Тип"} value={parameters.type} />
        <Parameter name={"Крепость"} value={parameters.toxicity} />
        <Parameter name={"Объем"} value={parameters.volume} />
      </div>
      <div className="product-item__price">
        <span>{price}</span>
        {salePrice && <span>{salePrice}</span>}
      </div>
      <div className="product-item__button-container">
        <Button text={"В корзину"} />
        <Button text={"Заказать"} />
      </div>
    </div>
  );
}

export default ProductItem;
