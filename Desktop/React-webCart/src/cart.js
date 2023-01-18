import React from "react";
import CartItem from "./CartItems";

const Cart = (props) => {
  const { products, onIncreaseQuantity, onDecreaseQuantity, onDeleteQuantity } =
    props;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.id}
            onIncreaseQuantity={onIncreaseQuantity}
            onDecreaseQuantity={onDecreaseQuantity}
            onDeleteQuantity={onDeleteQuantity}
          />
        );
      })}
    </div>
  );
};

export default Cart;
