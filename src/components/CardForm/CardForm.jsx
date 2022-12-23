import React from "react";
import { useNavigate } from "react-router-dom";
import formValidator from "../../helpers/formValidator";
import Button from "../Button/Button";
import CardField from "./CardField/CardField";

import "./CardForm.css";

function CardForm({ handleField, form, clearStore }) {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(form);
    if (formValidator(form)) {
      clearStore();
      navigate("/order");
    }
  };

  return (
    <div className="card-form">
      <div className="card-form__top-group">
        <div className="card-form__fields">
          <CardField
            label={"Номер карты"}
            isSmall={false}
            handleField={(name, value) => handleField(name, value)}
            name={"card"}
          />
          <div className="card-form__mid-group">
            <CardField
              label={"Срок действия"}
              isSmall={true}
              handleField={(name, value) => handleField(name, value)}
              name={"due"}
            />
            <CardField
              label={"CVC"}
              isSmall={true}
              handleField={(name, value) => handleField(name, value)}
              name={"cvc"}
            />
          </div>
          <CardField
            label={"Имя держателя карты"}
            isSmall={false}
            handleField={(name, value) => handleField(name, value)}
            name={"cardHolder"}
          />
        </div>
        <img
          className="card-form__icon"
          src="/MarketProject/assets/icons/card.png"
        />
      </div>
      <Button onClick={handleClick} text={"Оформить заказ"} />
    </div>
  );
}

export default CardForm;
