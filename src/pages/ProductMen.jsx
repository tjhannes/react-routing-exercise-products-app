import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function PageProductMen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/mens-shoes")
      .then((res) => setProducts(res.data.products));
  }, []);

  return (
    <>
      <NavBar />
      {products.map((product) => (
        /* The code is used both at ProductMen and ProductWomen */
        /* Refactor this code into a component */
        <Link key={product.id} to={"/product/" + product.id}>
          <div className="card">
            <div>
              <img height="50px" src={product.images[0]} alt="" />
              <p>{product.title}</p>
            </div>
            <div className="button-add-to-cart">
              <AddCircleOutlineIcon />
              Zum Warenkorb hinzufügen
            </div>
            <hr />
          </div>
        </Link>
      ))}
    </>
  );
}

export default PageProductMen;
