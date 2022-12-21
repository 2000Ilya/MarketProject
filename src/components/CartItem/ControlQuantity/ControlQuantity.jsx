import React from "react";

import "./ControlQuantity.css";

function ControlQuantity({ quantity }) {
  return (
    <div className="control-container">
      <div className="control" onClick={() => {}}></div>
      <span className="control__quantity-number">{quantity}</span>
      <div className="control" onClick={() => {}}></div>
    </div>
  );
}

export default ControlQuantity;
