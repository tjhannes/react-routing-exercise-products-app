import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ProductInfo from "./ProductInfo";

export default function ProductCard({ product }) {
  return (
    <Link to={"/product/" + product.id}>
      <div className="card">
        <ProductInfo product={product} />
        <div className="button-add-to-cart">
          <AddCircleOutlineIcon />
          Zum Warenkorb hinzufügen!
        </div>
        <hr />
      </div>
    </Link>
  );
}
