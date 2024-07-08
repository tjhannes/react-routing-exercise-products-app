export default function ProductInfo({ product }) {
  return (
    <div>
      <img height="50px" src={product.images[0]} alt="" />
      <p>{product.title}</p>
    </div>
  );
}
