import React, { useState } from "react";
import Search from "../Icons/Search/Search";
import Tab from "./Tab/Tab";

import "./Tabs.css";

const tabs = [
  { name: "Вино", category: "wine", id: 1 },
  { name: "Шампанское и игристое", category: "champagne", id: 2 },
  { name: "Крепкий алкоголь", category: "strong", id: 3 },
  { name: "Пиво", category: "beer", id: 4 },
];

function Tabs({
  selectedCategory,
  changeCategory,
  searchName,
  changeSearchName,
}) {
  return (
    <div className="tabs-container">
      <div className="tabs">
        <div className="tabs__search-group">
          <input
            value={searchName}
            onChange={(event) => changeSearchName(event.target.value)}
            placeholder="Поиск по каталогу"
            className="tabs__search-product"
          />
          <Search />
        </div>
        <div className="tabs-group">
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              selectTab={() => {
                changeCategory(tab.category);
              }}
              name={tab.name}
              isSelected={tab.category === selectedCategory}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
