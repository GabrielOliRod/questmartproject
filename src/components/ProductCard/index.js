import styles from "./ProductCard.module.css";
import ButtonProduct from "../ButtonProduct";

function ProductCard({ products }) {

  return (
    <>
      {products.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <img src={product.photo} alt={product.name} />
          <h5 style={{ marginTop: "2vh" }}>{product.name}</h5>
          <p>R$ {product.price}</p>
          <ButtonProduct product = {product}/>
        </div>
      ))}
    </>
  );
}

export default ProductCard;