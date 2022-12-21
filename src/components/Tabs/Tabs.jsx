import React from "react";
import Tab from "./Tab/Tab";

import "./Tabs.css";

function Tabs() {
  return (
    <div className="tabs-container">
      <Tab name={"Вино"} />
      <Tab name={"Шампанское и игристое"} />
      <Tab name={"Крепкий алкоголь"} />
      <Tab name={"Пиво"} />
    </div>
  );
}

export default Tabs;
