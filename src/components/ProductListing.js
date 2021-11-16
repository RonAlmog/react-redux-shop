import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";

function ProductListing() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("error:", err);
      });
    console.log("res", response.data);
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("products:", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
