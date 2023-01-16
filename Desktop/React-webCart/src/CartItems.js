import React from "react";

class CartItem extends React.Component{
    render()
    {
        return(
            <div className="cart-item">
                <div className="left-block">
                <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>item</div>
                    <div style={{color:'lightgray'}}>Price</div>
                    <div style={{color:'lightgray'}}>Qty:1</div>
                    <div className="cart-item-actions">
                        { /*bhii */}
                    </div>
                </div>
            </div>

        );
    }
}


 const styles=  {
    image :{
        width:110,
        height:110,
        borderRadius:6,
        backgroundColor:'grey'
    }
 }
export default CartItem;