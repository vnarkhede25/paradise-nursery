import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Paradise Nursery</h1>
        <h2>Welcome to Paradise Nursery</h2>
        <p>
          We are passionate about bringing nature closer to you.
          Explore our collection of beautiful indoor, flowering,
          and succulent plants to make your home fresh and green.
        </p>
        <Link to="/plants" className="btn">Get Started</Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </HashRouter>
  );
}
