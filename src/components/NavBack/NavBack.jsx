import React from "react";
import { Link } from "react-router-dom";
import ArrowBack from "../Icons/ArrowBack";

import "./NavBack.css";

function NavBack() {
  return (
    <Link className="nav-back">
      <ArrowBack />
    </Link>
  );
}

export default NavBack;
