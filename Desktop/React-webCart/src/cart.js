
import React from "react";
import CartItem from './CartItems'; 

class Cart extends React.Component{

    // state local items 
    constructor(){
        super();
        this.state= {
            products :[
            {
                id:1,
                title:'Watch',
                price:999,
                qty:2,
                img:''
            },
            {
                id:2,
                title:'Phone',
                price:15000,
                qty:5,
                img:''
            },
            {
                id:3,
                title:'Laptop',
                price:500000,
                qty:1,
                img:''
            }
            ]
        }
    }

    HandlingIncreaseQuantity = (product)=>
    {
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty +=1;
        this.setState({products});
    }

    HandlingDecreaseQuantity = (product)=>
    {
        const { products } = this.state;
        const index = products.indexOf(product);

        if(products[index].qty ===0)
        return ;
        
        products[index].qty -=1;
        this.setState({products});
    }
    //delete item from cart
    HandlingDeleteQuantity =(id)=>{
        const {products} = this.state;

        const itemsArray = products.filter((item )=> item.id !== id);
        this.setState({products:itemsArray});
    }

    render(){

        const {products} = this.state;
        return (
            <div className="cart">
            {products.map((product)=>{
                return (
                        <CartItem
                        product={product}
                         key={product.id} 
                         onIncreaseQuantity ={this.HandlingIncreaseQuantity}
                         onDecreaseQuantity ={this.HandlingDecreaseQuantity}
                         onDeleteQuantity ={this.HandlingDeleteQuantity}
                        />)
            })}
            </div>
        );
    }
}

export default Cart;