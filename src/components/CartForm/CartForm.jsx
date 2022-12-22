import React from "react";
import CartField from "./CartField/CartField";

import "./CartForm.css";

function CartForm({ quantity, resultPrice }) {
  return (
    <div className="cart-form__container">
      <div className="cart-form__title">{"Корзина"}</div>
      <div className="cart-form__description">
        {"Остались вопросы?"}
        <br />
        {
          "После оформления заказа с вами свяжется менеджер для подтверждения заказа и ответит на них!"
        }
      </div>
      <div className="cart-form__fields">
        <CartField label={"Введите имя"} />
        <CartField label={"Введите телефон"} />
        <CartField label={"Адрес доставки"} />
        <CartField label={"Ожидаемое время доставки"} />
      </div>
      <div className="cart-form__checkout">{`Товаров ${quantity} на сумму: ${resultPrice} р.`}</div>
    </div>
  );
}

export default CartForm;
