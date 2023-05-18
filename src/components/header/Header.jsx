import React, { useContext } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <div>
      <h1 className="app-name">Swigato</h1>
      <p style={{ fontSize: "14px", marginTop: "5px" }}>
        <i>a config driven UI...</i>
      </p>
    </div>
  );
};

export default function Header() {

  const {users} = useContext(UserContext);

  const cartItems= useSelector(store => store.cart.items);
  // const cartItems = cartItem.map(el => el.card.info);
console.log(cartItems);
  return (
    <header className="header">
      <a href="/">
        <nav className="navbar-left">
          <img
            className="app-logo"
            src="https://www.logodesign.net/images/tutorials/restaurent-logos/restaurant-logo-designer-needs.png"
          />
          <Title />
        </nav>
      </a>

      <nav className="navbar-right">
        <h4>{users.name}  ({users.email})</h4>
        <ul className="navbar-right-lists">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/cart">
            <li>Cart - {cartItems.length} items</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
