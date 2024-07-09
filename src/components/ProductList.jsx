import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import WarenkorbProvider, {
  WarenkorbContext,
} from "../context/WarenkorbContext";

export default function ProductList({ apiEndpoint }) {
  const [products, setProducts] = useState([]);
  const { warenkorb, setWarenkorb } = useContext(WarenkorbContext);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/" + apiEndpoint)
      .then((res) => setProducts(res.data.products));
  }, []);

  return (
    <>
      <p>Warenkorb Anzahl Produkte: {warenkorb.length}</p>
      <p>Preis: {price}</p>
      <p>Marken: Nike, Puma, ... (HOMEWORK)</p>
      {products.map((product) => (
        /* The code is used both at ProductMen and ProductWomen */
        /* Refactor this code into a component */
        <ProductCard
          product={product}
          key={product.id}
          setWarenkorb={setWarenkorb}
          setPrice={setPrice}
        />
      ))}
    </>
  );
}
