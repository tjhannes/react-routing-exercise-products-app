import React from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function ProductList({ apiEndpoint }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/" + apiEndpoint)
      .then((res) => setProducts(res.data.products));
  }, []);

  return (
    <>
      {products.map((product) => (
        /* The code is used both at ProductMen and ProductWomen */
        /* Refactor this code into a component */
        <ProductCard product={product} key={product.id} />
      ))}
    </>
  );
}
