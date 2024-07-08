import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";

function PageProductWomen() {
  return (
    <>
      <NavBar />
      <ProductList apiEndpoint="womens-shoes" />
    </>
  );
}

export default PageProductWomen;
