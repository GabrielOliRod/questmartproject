import { useNavigate } from "react-router";
import styles from "./ButonProduct.module.css"

function ButtonProduct({product}){
    const navigate = useNavigate();
    const handleProductPage = (product) => {
        navigate(`/InfoProduto?name=${product.name}`);
      };
    return(
        <div className={styles.container}>
        <button onClick={() => handleProductPage(product)} type="button" className="btn btn-dark">
            Ver Produto
          </button>
        </div>
    )
}

export default ButtonProduct