import { useSearchParams } from "react-router-dom";
import shirts from "../../database/shirtsdb.json";
import pants from "../../database/pantsdb.json";
import shorts from "../../database/shortsdb.json";
import sweatshirts from "../../database/sweatshirtdb.json";
import styles from "./BodyInfoProduct.module.css"

function BodyInfoProduct() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || "";

  // Junta todos os produtos em um array
  const products = [...shirts, ...shorts, ...sweatshirts, ...pants];

  // Busca o produto pelo nome
  const foundProduct = products.find((item) => item.name === name);

  if (!foundProduct) {
    return <p>Produto não encontrado</p>;
  }

  return (
    <div className={styles.container}>
        <div className={styles.containerInfos}>
      <h1>{foundProduct.name}</h1>
      <p>Preço: {foundProduct.price}</p>
      <button type="button" className="btn btn-dark">Adicionar ao Carrinho</button>
      </div>
      <div className={styles.containerImg}>
      <img src={foundProduct.photo} alt={foundProduct.name} />
      </div>
    </div>
  );
}

export default BodyInfoProduct;