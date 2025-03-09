import { useNavigate } from "react-router";
import styles from "./ButonProduct.module.css";

function ButtonProduct({ product }) {
  /* Resolvi criar uma página somente para o botão do Card de produto
  Desta forma é mais fácil de chamar ele nos Cards na HomePage e no ProductCard*/
  const navigate = useNavigate();
  const handleProductPage = (product) => {
    navigate(`/InfoProduto?name=${product.name}`);
  };
  return (
    <div className={styles.container}>
      <button
        onClick={() => handleProductPage(product)}
        type="button"
        className="btn btn-dark"
      >
        Ver Produto
      </button>
    </div>
  );
}

export default ButtonProduct;
