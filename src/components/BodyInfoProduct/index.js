import { useSearchParams } from "react-router-dom";
import shirts from "../../database/shirtsdb.json";
import pants from "../../database/pantsdb.json";
import shorts from "../../database/shortsdb.json";
import sweatshirts from "../../database/sweatshirtdb.json";
import styles from "./BodyInfoProduct.module.css";

function BodyInfoProduct() {
  // Juntando todos os produtos
  const products = [...shirts, ...shorts, ...sweatshirts, ...pants];

  // Pegando parâmetros da URL corretamente
  const [searchParams] = useSearchParams();
  const productName = searchParams.get("name"); // Pegando o nome do produto

  // Encontrar o produto pelo nome
  const product = products.find((product) => product.name === productName);

  // Logs para depuração
  console.log("Produtos carregados:", products);
  console.log("Nome buscado:", productName);
  console.log("Produto encontrado:", product);

  // Se o produto não for encontrado, exibe mensagem de erro
  if (!product) {
    return <p>Produto não encontrado!</p>;
  }

  return (
    <div className={styles.container}>
      <h1>{product.name}</h1>
      <img src={product.photo} alt={product.name} />
      <p>Preço: {product.price}</p>
    </div>
  );
}

export default BodyInfoProduct;
