import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

function PageProductDetail() {
  const params = useParams();
  const [selectedProduct, setSelectedProduct] = useState();
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + params.id)
      .then((res) => res.json())
      .then((res) => setSelectedProduct(res));
  }, []);

  console.log(selectedProduct);

  function handleNext() {
    if (imageIndex === selectedProduct.images.length - 1 /* = 3 */) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  function handlePrev() {
    if (imageIndex === 0) {
      setImageIndex(selectedProduct.images.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  }

  return (
    <>
      <NavBar />
      <div>Dies ist die Detailansicht von Produkt: {params.id}</div>
      {/* show title */}
      <h1>{selectedProduct?.title}</h1>
      {selectedProduct?.images && (
        <img width={300} src={selectedProduct?.images[imageIndex]} alt="" />
      )}
      {/* button to show the next image */}
      <button onClick={handlePrev}>Previous image</button>
      <button onClick={handleNext}>Next image</button>
    </>
  );
}

export default PageProductDetail;
