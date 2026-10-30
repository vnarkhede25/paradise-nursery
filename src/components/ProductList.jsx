import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/CartSlice";
import plants from "../data/plants";

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const categories = [...new Set(plants.map(plant => plant.category))];

  return (
    <div className="container">
      <h1>Our Beautiful Plants</h1>
      <p>Choose your favourite plants and make your home greener.</p>

      {categories.map(category => (
        <section key={category}>
          <h2>{category} Plants</h2>
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
  );
}
