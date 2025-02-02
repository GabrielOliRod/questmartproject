import { useNavigate } from "react-router";
import styles from "./ProductCard.module.css";

function ProductCard({ products }) {
  const navigate = useNavigate();

  const handleProductPage = (product) => {
    navigate(`/InfoProduto?name=${product.name}`);
  };

  return (
    <>
      {products.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <img src={product.photo} alt={product.name} />
          <h5 style={{ marginTop: "2vh" }}>{product.name}</h5>
          <p>{product.price}</p>
          <button onClick={() => handleProductPage(product)} type="button" className="btn btn-dark">
            Ver Produto
          </button>
        </div>
      ))}
    </>
  );
}

export default ProductCard;