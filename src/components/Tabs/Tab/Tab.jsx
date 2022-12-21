import React from "react";
import TabArrow from "../../Icons/TabArrow";

import "./Tab.css";

function Tab({ name, isSelected }) {
  return (
    <div className="tab">
      <span>{name}</span>
      {isSelected && <TabArrow />}
    </div>
  );
}

export default Tab;
