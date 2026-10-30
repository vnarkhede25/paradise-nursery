import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const items = useSelector(state => state.cart.items);
  const count = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">🌿 Paradise Nursery</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">🛒 Cart ({count})</Link>
      </div>
    </nav>
  );
}
