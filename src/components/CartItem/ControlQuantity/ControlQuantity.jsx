import React from "react";

import "./ControlQuantity.css";

function ControlQuantity({ quantity, addProduct, deleteProduct }) {
  return (
    <div className="control-container">
      <div
        className="control"
        onClick={() => {
          addProduct();
        }}
      >
        {"—"}
      </div>
      <span className="control__quantity-number">{quantity}</span>
      <div
        className="control"
        onClick={() => {
          deleteProduct();
        }}
      >
        {"+"}
      </div>
    </div>
  );
}

export default ControlQuantity;
