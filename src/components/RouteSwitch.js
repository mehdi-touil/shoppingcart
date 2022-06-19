import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import * as images from "../images/icons";
import Contact from "./Contact";
import Home from "./Home";
import Products from "./Products";
import ProductsRedirect from "./ProductsRedirect ";
import ShoppingCart from "./ShoppingCart";
import * as items from "./ItemsData";
import { useState } from "react";
const RouteSwitch = () => {
 const showcart = () => {
  document.querySelector(".cartparent").style.display = "block";
  document.querySelector(".shoppingcartcontainer").classList.toggle("flexcart");
  document.querySelector(".barcontainer").classList.toggle("flexbar");
  setTimeout(() => {
   document.querySelector(".barcontainer").addEventListener("click", hidecart);
  }, 1000);
 };
 const hidecart = () => {
  document.querySelector(".cartparent").style.display = "none";
  document.querySelector(".shoppingcartcontainer").classList.toggle("flexcart");
  document.querySelector(".barcontainer").classList.toggle("flexbar");
  document
   .querySelector(".barcontainer")
   .removeEventListener("click", hidecart);
 };
 const [countclick, setCountclick] = useState(0);
 const [mycart, setMycart] = useState([]);

 const increment = () => {
  setCountclick(countclick + 1);
 };
 const decrement = () => {
  setCountclick(countclick - 1);
 };
 const addtocart = (event) => {
  const id = event.target.id;
  increment();
  if (mycart.findIndex((item) => item.id == id) == -1) {
   const myitem = items.all.find((item) => item.id == id);
   setMycart([...mycart, { ...myitem, count: 1 }]);
  } else {
   var mynewcart = mycart;
   mynewcart[mynewcart.findIndex((item) => item.id == id)].count++;
   setMycart(mynewcart);
  }
 };
 const addquantity = (event) => {
  const id = event.target.id;
  increment();
  var mynewcart = structuredClone(mycart);
  mynewcart[mynewcart.findIndex((item) => item.id == id)].count++;
  setMycart(mynewcart);
 };
 const reducequantity = (event) => {
  const id = event.target.id;
  decrement();
  var mynewcart = structuredClone(mycart);
  var el = mynewcart[mynewcart.findIndex((item) => item.id == id)];
  el.count--;
  if (el.count == 0) {
   mynewcart = mynewcart.filter((x) => x.id != id); //eliminate element
  }
  setMycart(mynewcart);
 };
 return (
  <Router>
   <ShoppingCart
    hidecart={hidecart}
    mycart={mycart}
    addquantity={addquantity}
    reducequantity={reducequantity}
   />
   <nav className="navbar">
    <div className="title">
     {" "}
     <img src={images.logo} />
    </div>
    <div className="navbarpanel">
     <NavLink to="/">home</NavLink>
     <NavLink to="/products">products</NavLink>
     <NavLink to="/contact">Contact</NavLink>
     <a onClick={showcart}>
      <img src={images.shoppingcart} />
      {countclick == 0 ? "" : <div className="cartindex">{countclick}</div>}
     </a>
    </div>
   </nav>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products">
     <Route index element={<ProductsRedirect />} />
     <Route
      path="laptops"
      element={<Products items={items.laptops} add={addtocart} />}
     ></Route>
     <Route
      path="smartphones"
      element={<Products items={items.smartphones} add={addtocart} />}
     />
     <Route
      path="cameras"
      element={<Products items={items.cameras} add={addtocart} />}
     />
     <Route
      path="accessories"
      element={<Products items={items.accessories} add={addtocart} />}
     />
    </Route>
    <Route path="/contact" element={<Contact />} />
   </Routes>
   <footer>
    Created by Mehdi Touil for The odin Project || copyright © 2022 all rights
    reserved
    <a href="https://www.github.com/mehdi-touil/">
     <img src={images.github} width="30px" />
    </a>
   </footer>
  </Router>
 );
};

export default RouteSwitch;
