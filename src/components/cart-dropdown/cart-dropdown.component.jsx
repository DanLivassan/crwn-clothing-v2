import React from "react";
import { useCartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useCartContext();
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem, i) => (
          <div key={i}>
            {cartItem.name} x {cartItem.quantity}
          </div>
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
