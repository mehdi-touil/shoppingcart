import uniqid from "uniqid";
import React from "react";
import * as images from "../images/icons";
function ShoppingCart({ mycart, hidecart, addquantity, reducequantity }) {
 const calculatetotal = (mycart) => {
  var total = 0;
  for (let key in mycart) {
   total += mycart[key].count * mycart[key].price;
  }
  return total;
 };
 return (
  <div className="cartparent">
   <div className="barcontainer"></div>
   <div className="shoppingcartcontainer">
    <div className="shoppingcarttitle">Your Shopping Cart</div>
    <div className="shoppingcartlist">
     {mycart.map((x) => {
      return (
       <div className="shoppingcartitem" key={uniqid()}>
        <div className="shoppingcartitemimage">
         <img src={x.image} width="100px" />
        </div>
        <div className="shoppingcartitembody">
         <div className="cartitemname">{x.name}</div>
         <div className="cartitemprice">{x.price}</div>
         <div className="cartitempanel">
          <div className="cartitemminus" id={x.id}>
           <img
            src={images.minus}
            width="40px"
            id={x.id}
            onClick={reducequantity}
           />{" "}
          </div>
          <div className="cartitemnumber">{x.count}</div>
          <div className="cartitemplus">
           <img src={images.add} width="40px" id={x.id} onClick={addquantity} />
          </div>
         </div>
        </div>
       </div>
      );
     })}
    </div>
    <div className="total">Total: $ {calculatetotal(mycart)}</div>
    <div className="checkout">Checkout</div>
    <div className="close" onClick={hidecart}>
     Close
    </div>
   </div>
  </div>
 );
}

export default ShoppingCart;
