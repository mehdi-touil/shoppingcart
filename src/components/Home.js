import React from "react";
import { NavLink } from "react-router-dom";
import * as images from "../images/icons";
function Home() {
 return (
  <div className="homecontainer">
   <NavLink to="/products">
    <p>Shop Now </p>
    <img src={images.shoppingcart1} width="40px" />
   </NavLink>
  </div>
 );
}

export default Home;
