import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity } from "../store/CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  return (
    <div className="container">
      <h1>Your Shopping Cart</h1>

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
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Subtotal: ₹{item.price * item.quantity}</p>

                <button onClick={() =>
                  dispatch(updateQuantity({
                    id: item.id,
                    quantity: item.quantity - 1
                  }))
                }>-</button>

                <span className="quantity">{item.quantity}</span>

                <button onClick={() =>
                  dispatch(updateQuantity({
                    id: item.id,
                    quantity: item.quantity + 1
                  }))
                }>+</button>

                <button className="remove-btn"
                  onClick={() => dispatch(removeItem(item.id))}>
                  Delete
                </button>
              </div>
            </div>
          ))}

          <h2>Total Amount: ₹{totalPrice}</h2>
          <button onClick={() => alert("Coming Soon!")}>
            Checkout
          </button>
          <Link to="/plants" className="btn continue">
            Continue Shopping
          </Link>
        </>
      )}
    </div>
  );
}
