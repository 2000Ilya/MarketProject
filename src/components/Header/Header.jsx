import React from "react";
import NavBar from "./NavBar/NavBar";
import Like from "../Icons/Like/Like";
import Cart from "../Icons/Cart/Cart";
import Avatar from "../Icons/Avatar/Avatar";
import Logo from "../Icons/Logo/Logo";

import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-container flex-center-middle">
      <div className="header">
        <Link to={"/"}>
          <Logo />
        </Link>
        <NavBar />
        <div className="header__controls-group">
          <Link to={"/cart"}>
            <Cart />
          </Link>
          <Like fill={"#ffffff"} />
          <Avatar />
        </div>
      </div>
    </header>
  );
}

export default Header;
