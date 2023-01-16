import React from "react";

class CartItem extends React.Component{

    render(){

        const {id,title,price,qty} = this.props.product;
        const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteQuantity} = this.props;
        return(
            <div className="cart-item">
                <div className="left-block">
                <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'lightgray'}}>Rs. {price}</div>
                    <div style={{color:'lightgray'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        { /*buttons  from flaticon.com it has icons*/}
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/399/399271.png" onClick={() =>onIncreaseQuantity(product)}/>
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/2569/2569198.png" onClick={() =>onDecreaseQuantity(product)}/>
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/3221/3221897.png" onClick={()=>onDeleteQuantity(id)}/>
                    </div>
                </div>
            </div>

        );
    }
}


 const styles=  {
    image :{
        width:120,
        height:120,
        borderRadius:4,
        backgroundColor:'grey'
    }
 }
export default CartItem;