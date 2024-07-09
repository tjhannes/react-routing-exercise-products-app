import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ProductInfo from "./ProductInfo";

export default function ProductCard({ product, setWarenkorb, setPrice }) {
  return (
    <>
      <Link to={"/product/" + product.id}>
        <div className="card">
          <ProductInfo product={product} />
          Preis {product.price} €
        </div>
      </Link>
      <button
        onClick={() => {
          setWarenkorb((prev) => [...prev, product]);
          setPrice((prev) => prev + product.price);
        }}
      >
        <div className="button-add-to-cart">
          <AddCircleOutlineIcon />
          Zum Warenkorb hinzufügen!
        </div>
      </button>
      <hr />
    </>
  );
}
