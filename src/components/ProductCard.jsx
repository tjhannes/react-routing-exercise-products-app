import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ProductInfo from "./ProductInfo";

export default function ProductCard({ product, setWarenkorb }) {
  return (
    <>
      <Link to={"/product/" + product.id}>
        <div className="card">
          <ProductInfo product={product} />
        </div>
      </Link>
      <button onClick={() => setWarenkorb((prev) => [...prev, product])}>
        <div className="button-add-to-cart">
          <AddCircleOutlineIcon />
          Zum Warenkorb hinzufügen!
        </div>
      </button>
      <hr />
    </>
  );
}
