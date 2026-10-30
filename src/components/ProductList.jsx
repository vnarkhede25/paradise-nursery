import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../store/CartSlice";

const plants = [
  { id: 1, name: "Snake Plant", category: "Indoor Plants", price: 250, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400" },
  { id: 2, name: "Peace Lily", category: "Indoor Plants", price: 300, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" },
  { id: 3, name: "Monstera", category: "Indoor Plants", price: 450, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400" },
  { id: 4, name: "Areca Palm", category: "Indoor Plants", price: 350, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400" },
  { id: 5, name: "ZZ Plant", category: "Indoor Plants", price: 280, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
  { id: 6, name: "Money Plant", category: "Indoor Plants", price: 180, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },

  { id: 7, name: "Rose", category: "Flowering Plants", price: 150, image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400" },
  { id: 8, name: "Hibiscus", category: "Flowering Plants", price: 180, image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400" },
  { id: 9, name: "Jasmine", category: "Flowering Plants", price: 120, image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400" },
  { id: 10, name: "Orchid", category: "Flowering Plants", price: 400, image: "https://images.unsplash.com/photo-1566907225472-514a2a7c3c7d?w=400" },
  { id: 11, name: "Marigold", category: "Flowering Plants", price: 100, image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400" },
  { id: 12, name: "Bougainvillea", category: "Flowering Plants", price: 220, image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400" },

  { id: 13, name: "Aloe Vera", category: "Succulents", price: 120, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
  { id: 14, name: "Jade Plant", category: "Succulents", price: 180, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400" },
  { id: 15, name: "Echeveria", category: "Succulents", price: 150, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400" },
  { id: 16, name: "Haworthia", category: "Succulents", price: 200, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" },
  { id: 17, name: "Cactus", category: "Succulents", price: 130, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400" },
  { id: 18, name: "Echeveria Blue", category: "Succulents", price: 250, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" }
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity, 0
  );

  const categories = ["Indoor Plants", "Flowering Plants", "Succulents"];

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">🌿 Paradise Nursery</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">🛒 Cart <span className="cart-count">{cartCount}</span></Link>
        </div>
      </nav>

      <div className="container">
        <h1>Our Beautiful Plants</h1>
        <p>Choose your favourite plants and bring nature home.</p>

        {categories.map(category => (
          <section key={category}>
            <h2>{category}</h2>
            <div className="product-grid">
              {plants.filter(plant => plant.category === category).map(plant => {
                const added = cartItems.some(item => item.id === plant.id);

                return (
                  <div className="product-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>₹{plant.price}</p>
                    <button
                      disabled={added}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {added ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
