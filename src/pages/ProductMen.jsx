import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";

function PageProductMen() {
  return (
    <>
      <NavBar />
      <ProductList apiEndpoint="mens-shoes" />
      <a href={"/product/186"}>A Link</a>
    </>
  );
}

export default PageProductMen;
