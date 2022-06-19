import React from "react";
import * as images from "../images/icons";
import uniqid from "uniqid";
function GridItem({ items, add }) {
 return (
  <div className="gridcontainer">
   {items.map((x) => {
    return (
     <div key={uniqid()} className="griditem">
      <div className="itemimage">
       <img src={x.image} />
      </div>
      <div className="itembody">
       <div className="itemname">{x.name}</div>
       <div className="itemprice">{x.price}$</div>
       <div className="addtocartbutton" id={x.id} onClick={add}>
        <img src={images.addtocart} width="40px" />
        <p>Add To Chart</p>
       </div>
      </div>
     </div>
    );
   })}
  </div>
 );
}

export default GridItem;
{
}
