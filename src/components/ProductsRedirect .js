import React from "react";
import { Navigate } from "react-router-dom";

function ProductsRedirect() {
 return <Navigate to="/products/laptops" replace={true} />;
}

export default ProductsRedirect;
