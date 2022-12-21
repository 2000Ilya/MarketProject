import React from "react";
import NavBar from "./NavBar/NavBar";
import Like from "../Icons/Like";
import Cart from "../Icons/Cart";
import Avatar from "../Icons/Avatar";

import "./Header.css";
import Logo from "../Icons/Logo";

function Header() {
  return (
    <header className="header-container">
      <div className="header">
        <Logo />
        <NavBar />
        <div className="header__controls-group">
          <Cart />
          <Like />
          <Avatar />
        </div>
      </div>
    </header>
  );
}

export default Header;
