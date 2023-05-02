import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
    return (    <header className="d-flex justify-between align-center p-40">
    <Link to="/">
      <div className="headerLeft d-flex align-center">
        <img className="pr-20" src="headerLogo.svg" alt="header Logo"/>
          <div className="headerInfo">
            <h3 className="text-uppercase"> React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
      </div>
    </Link>
      <ul className="headerRight d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img className="mr-5" src="cart.svg" alt="cart"/>
          <span>1205 руб.</span>
        </li>
        <li className="mr-30 cu-p">
          <Link to="/favorites">
            <img src="favorites.svg" alt="user logo"/>
          </Link>
        </li>
        <li>
          <img src="user.svg" alt="user logo"/>
        </li>
      </ul>
    </header>)
}

export default Header;
