import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function PageProductDetail() {
  const params = useParams();
  /* const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + params.id)
      .then((res) => res.json())
      .then((res) => setSelectedProduct(res.title));
  }, []); */

  return (
    <>
      <NavBar />
      <div>Dies ist die Detailansicht von Produkt: {params.id}</div>
    </>
  );
}

export default PageProductDetail;
