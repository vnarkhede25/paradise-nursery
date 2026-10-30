import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity } from "../store/CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity, 0
  );

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  const handleDecrement = (item) => {
    if (item.quantity <= 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(updateQuantity({
        id: item.id,
        quantity: item.quantity - 1
      }));
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">🌿 Paradise Nursery</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">🛒 Cart <span className="cart-count">{totalItems}</span></Link>
        </div>
      </nav>

      <div className="container">
        <h1>Shopping Cart</h1>

        {items.length === 0 ? (
          <>
            <h2>Your cart is empty!</h2>
            <Link to="/plants" className="btn">Continue Shopping</Link>
          </>
        ) : (
          <>
            <h3>Total Items: {totalItems}</h3>

            {items.map(item => (
              <div className="cart-item" key={item.id}>
                <img
                  className="cart-item-image"
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-cost">Unit Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ₹{item.price * item.quantity}</p>

                  <button onClick={() =>
                    handleDecrement(item)
                  }>-</button>

                  <button onClick={() =>
                    dispatch(updateQuantity({
                      id: item.id,
                      quantity: item.quantity + 1
                    }))
                  }>+</button>

                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <h2>Total Cart Amount: ₹{totalAmount}</h2>

            <button onClick={() => alert("Coming Soon!")}>
              Checkout
            </button>

            <Link to="/plants" className="btn continue">
              Continue Shopping
            </Link>
          </>
        )}
      </div>
    </>
  );
}
