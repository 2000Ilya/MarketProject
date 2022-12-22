import React, { useState } from "react";
import Search from "../Icons/Search/Search";
import Tab from "./Tab/Tab";

import "./Tabs.css";

const tabs = [
  { name: "Вино", id: 1 },
  { name: "Шампанское и игристое", id: 2 },
  { name: "Крепкий алкоголь", id: 3 },
  { name: "Пиво", id: 4 },
];

function Tabs() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(1);

  return (
    <div className="tabs-container">
      <div className="tabs">
        <div className="tabs__search-group">
          <input
            placeholder="Поиск по каталогу"
            className="tabs__search-product"
          />
          <Search />
        </div>
        <div className="tabs-group">
          {tabs.map((tab) => (
            <Tab
              selectTab={() => setSelectedTabIndex(tab.id)}
              name={tab.name}
              isSelected={tab.id === selectedTabIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
