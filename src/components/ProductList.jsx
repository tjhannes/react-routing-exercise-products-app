import React from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function ProductList({ apiEndpoint }) {
  const [products, setProducts] = useState([]);
  const [warenkorb, setWarenkorb] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/" + apiEndpoint)
      .then((res) => setProducts(res.data.products));
  }, []);

  return (
    <>
      <p>Warenkorb Anzahl Produkte: {warenkorb.length}</p>
      <p>Preis: </p>
      {products.map((product) => (
        /* The code is used both at ProductMen and ProductWomen */
        /* Refactor this code into a component */
        <ProductCard
          product={product}
          key={product.id}
          setWarenkorb={setWarenkorb}
        />
      ))}
    </>
  );
}
