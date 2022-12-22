import React from "react";

import "./CartField.css";

function CartField({ label }) {
  return (
    <div className="cart-field">
      <label className="cart-field__label" htmlFor="field">
        {label}
      </label>
      <input className="cart-field__input" id="field" />
    </div>
  );
}

export default CartField;
