import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Paradise Nursery</h1>
        <h2>Bring Nature Home</h2>
        <p>
          Welcome to Paradise Nursery! We offer a beautiful collection
          of indoor and outdoor plants to make your home fresh, green,
          and peaceful. Discover your favourite plants and bring nature
          into your life.
        </p>
        <Link to="/plants" className="btn">Get Started</Link>
      </div>
    </div>
  );
}
