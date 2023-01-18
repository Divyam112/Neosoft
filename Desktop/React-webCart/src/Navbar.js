import React from "react";

const Navbar = (props) => {
  const { productCount } = props;
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img
          style={styles.cartIcon}
          alt="cart-item"
          className="action-icons"
          src="https://cdn-icons-png.flaticon.com/128/9260/9260046.png"
        />
        <span style={styles.cartCount}>{productCount}</span>
      </div>
    </div>
  );
};

const styles = {
  nav: {
    height: 70,
    backgroundColor: "blue",
    display: "flex",
    flexDirection: "row-reverse",
  },
  cartIcon: {
    height: 32,
    marginRight: 20,
  },
  cartIconContainer: {
    position: "relative",
    top: 20,
    right: 10,
  },
  cartCount: {
    position: "absolute",
    backgroundColor: "yellow",
    borderRadius: "50%",
    padding: "2px 7px",
    fontSize: 15,
    left: 22,
    top: -10,
  },
};

export default Navbar;
