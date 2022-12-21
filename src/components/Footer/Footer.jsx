import React from "react";
import Logo from "../Icons/Logo";
import TG from "../Icons/TG";
import VK from "../Icons/VK";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="footer__categories-group">
          <div className="footer__header">{"Категории"}</div>
          <div className="footer__category">{"Вино"}</div>
          <div className="footer__category">{"Шампанское и игристое"}</div>
          <div className="footer__category">{"Крепкий алкоголь"}</div>
          <div className="footer__category">{"Пиво"}</div>
        </div>
        <div className="footer__contacts-group">
          <div className="footer__header">{"Контакты"}</div>
          <div className="footer__contact-phone">
            {"+7 (921) - 996- 75 - 26"}
          </div>
          <div className="footer__social-networks">
            <VK />
            <TG />
          </div>
          <Logo />
        </div>
        <div className="footer__description">
          {
            "Данный сайт является интернет-витриной, соблюдающей все правила и условия ФЗ РФ N171 О госрегулировании алкогольного рынка от 22.11.1995 (ред. от 31.12.2014) а также правила продажи товаров дистанционным способом, утверждённым Постановлением Правительства РФ от 27.09.2007 №612. Качество всего ассортимента подтверждено сертификатами и наличием специальных акцизных марок. В момент согласования заказа, при необходимости мы предоставим вам копии сертификатов. Информация на сайте не является публичной офертой."
          }
          <br />
          <br />
          {
            "МИНЗДРАВ ПРЕДУПРЕЖДАЕТ: ЧРЕЗМЕРНОЕ УПОТРЕБЛЕНИЕ АЛКОГОЛЯ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ"
          }
        </div>
      </div>
    </footer>
  );
}

export default Footer;
