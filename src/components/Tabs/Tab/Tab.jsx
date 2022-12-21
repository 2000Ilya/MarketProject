import React from "react";
import TabArrow from "../../Icons/TabArrow";

import "./Tab.css";

function Tab({ name }) {
  return (
    <div className="tab">
      <span>{name}</span>
      {<TabArrow />}
    </div>
  );
}

export default Tab;
