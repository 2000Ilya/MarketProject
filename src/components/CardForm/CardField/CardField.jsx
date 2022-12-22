import React from "react";

import "./CardField.css";

function CardField({ label, isSmall }) {
  return (
    <div className={`card-field ${isSmall ? "card-field__small" : ""}`}>
      <label className="card-field__label" htmlFor="field">
        {label}
      </label>
      <input className="card-field__input" id="field" />
    </div>
  );
}

export default CardField;
