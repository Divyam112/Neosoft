import React from "react";
import Cart from "./cart";
import Navbar from "./Navbar";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

class App extends React.Component {
  // state local items
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
    this.db = firebase.firestore();
  }

  componentDidMount() {
    /* firebase
      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        //console.log(snapshot);
         snapshot.docs.map((doc) => {
          console.log(doc.data());
        }); 
        const products = snapshot.docs.map((doc) => {
          let data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products,loading:false });
      }); */

    this.db
      .collection("products")
      //.where('price','>',9000)
      //.orderBy('price','desc')
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          let data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products, loading: false });
      });
  }

  HandlingIncreaseQuantity = (product) => {
    /*const { products } = this.state;
    const index = products.indexOf(product);
     products[index].qty += 1;
    this.setState({ products }); */
    const docRef = this.db.collection("products").doc(product.id);
    docRef
      .update({
        qty: product.qty + 1,
      })
      .then(() => {
        console.log("product updated successfully !!");
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  };

  // decrese quantity
  HandlingDecreaseQuantity = (product) => {
    /*const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) return;
    products[index].qty -= 1;
    this.setState({ products });
    */
    const docRef = this.db.collection("products").doc(product.id);
    if (product.qty === 0) return;

    docRef
      .update({
        qty: product.qty - 1,
      })
      .then(() => {
        console.log("product updated successfully !!");
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  };
  //delete item from cart
  HandlingDeleteQuantity = (id) => {
    /*   const { products } = this.state;
    const itemsArray = products.filter((item) => item.id !== id);
    this.setState({ products: itemsArray }); */

    const docRef = this.db.collection("products").doc(id);
    docRef
      .delete()
      .then(() => console.log("product deleted successfully !!"))
      .catch((error) => console.log("Error :", error));
  };

  addProduct = () => {
    this.db
      .collection("products")
      .add({
        title: "Washing Machine",
        price: 10000,
        qty: 2,
        img: "data:image/jpeg;base64,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",
      })
      .then(() => {
        console.log("product added successfully !!");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  //total items count
  HandlingTotalItemCount = () => {
    let countItem = 0;
    const { products } = this.state;
    products.forEach((product) => {
      countItem += product.qty;
    });
    return countItem;
  };

  getCartTotal = () => {
    let totalPrice = 0;
    const { products } = this.state;
    products.forEach((product) => {
      totalPrice += product.price * product.qty;
    });
    return totalPrice;
  };

  render() {
    return (
      <div className="App">
        <Navbar productCount={this.HandlingTotalItemCount()} />
        <button style={styles.addButton} onClick={this.addProduct}>
          Add A Product
        </button>
        <Cart
          products={this.state.products}
          onIncreaseQuantity={this.HandlingIncreaseQuantity}
          onDecreaseQuantity={this.HandlingDecreaseQuantity}
          onDeleteQuantity={this.HandlingDeleteQuantity}
        />
        {this.state.loading && <h1>Loading Products ...</h1>}
        <div style={{ fontSize: 20, backgroundColor: "blue", padding: 10 }}>
          TOTAL:{this.getCartTotal()}
        </div>
      </div>
    );
  }
}

const styles = {
  addButton: {
    fontSize: 20,
    backgroundColor: "cyan",
    padding: 5,
    borderRadius: "50px",
    margin: 10,
  },
};

export default App;
