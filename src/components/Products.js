import React from "react";
import GridItem from "./GridItem";
import * as images from "../images/icons";
import { Link, NavLink } from "react-router-dom";
function Products(props) {
 const fstyle = ({ isActive }) => ({
  background: isActive ? "#933" : undefined,
 });

 return (
  <div className="productscontainer">
   <div className="altersidebar">
    <NavLink to="/products/laptops" className="altersidebaritem" style={fstyle}>
     <div className="txt">Laptops</div>
     <div className="itemicon">
      <img src={images.laptop_i} width="30px" />
     </div>
    </NavLink>
    <NavLink to="/products/cameras" className="altersidebaritem" style={fstyle}>
     <div className="txt">Cameras</div>
     <div className="itemicon">
      <img src={images.camera_i} width="30px" />
     </div>
    </NavLink>
    <NavLink
     to="/products/accessories"
     className="altersidebaritem"
     style={fstyle}
    >
     <div className="txt">Accessories</div>
     <div className="itemicon">
      <img src={images.accessory_i} width="30px" />
     </div>
    </NavLink>
    <NavLink
     to="/products/smartphones"
     className="altersidebaritem"
     style={fstyle}
    >
     <div className="txt">Smartphones</div>
     <div className="itemicon">
      <img src={images.phone_i} width="30px" />
     </div>
    </NavLink>
   </div>
   <div className="sidebar">
    <Link to="/products/laptops" className="sidebarlink">
     <div className="sidebaritem">
      <img src={images.computer} width="100%" />
      <div>
       <p>Laptops</p>
      </div>
     </div>
    </Link>
    <Link to="/products/accessories">
     <div className="sidebaritem">
      <img src={images.accessories} width="100%" />
      <div>
       <p>Accessories</p>
      </div>{" "}
     </div>
    </Link>
    <Link to="/products/cameras">
     <div className="sidebaritem">
      <img src={images.camera} width="100%" />
      <div>
       <p>Cameras</p>
      </div>{" "}
     </div>
    </Link>
    <Link to="/products/smartphones" className="sibebarlink">
     <div className="sidebaritem">
      <img src={images.phone} width="100%" />
      <div>
       <p>Smartphones</p>
      </div>{" "}
     </div>
    </Link>
   </div>
   <GridItem items={props.items} add={props.add} />
  </div>
 );
}

export default Products;
