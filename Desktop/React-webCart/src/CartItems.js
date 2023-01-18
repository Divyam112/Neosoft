import React from "react";

const CartItem = (props) => {
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteQuantity } =props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} alt = "product" src ={product.img} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{product.title}</div>
        <div style={{ color: "lightgray" }}>Rs. {product.price}</div>
        <div style={{ color: "lightgray" }}>Qty: {product.qty}</div>
        <div className="cart-item-actions">
          {/*buttons  from flaticon.com it has icons*/}
          <img
            alt="increase"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/399/399271.png"
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/2569/2569198.png"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/3221/3221897.png"
            onClick={() => onDeleteQuantity(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    width: 120,
    height: 120,
    borderRadius: 4,
    backgroundColor: "grey",
  },
};
export default CartItem;
