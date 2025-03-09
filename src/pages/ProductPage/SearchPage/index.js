import { useSearchParams } from "react-router-dom";
import styles from "./SearchPage.module.css";
import shirts from "../../../database/shirtsdb.json";
import pants from "../../../database/pantsdb.json";
import shorts from "../../../database/shortsdb.json";
import sweatshirts from "../../../database/sweatshirtdb.json";
import ProductCard from "../../../components/ProductCard";

function SearchPage() {
  //Junta todos os produtos em um único Array
  const products = [...shirts, ...shorts, ...sweatshirts, ...pants];

  //Verifica os parametros de URL
  const [searchParams] = useSearchParams();
  const data = searchParams.get("data") || "";

  //Filtra os produtos com base na pesquisa
  const filteredProducts = products.filter((product) => {
    //Faz a verificação dos metadados e se o produto se encontra lá
    const metaMatches = Array.isArray(product.meta)
      ? product.meta.some((tag) =>
          tag.toLowerCase().includes(data.toLowerCase())
        )
      : product.meta?.toLowerCase().includes(data.toLowerCase());

    //Faz a verificação do nome do produto e se ele se encontra lá
    const nameMatches = product.name.toLowerCase().includes(data.toLowerCase());

    return metaMatches || nameMatches;
  });

  return (
    <>
      {/*Container Título*/}
      <div className={styles.title}>
        <h1>Resultados para "{data}"</h1>
      </div>

      {/*Container Principal*/}
      <div className={styles.container}>
        {filteredProducts.length > 0 ? (
          <ProductCard products={filteredProducts} />
        ) : (
          <p>
            Nenhum produto encontrado.
          </p> /*Caso não encontre nenhum, retorna essa mensagem*/
        )}
      </div>
    </>
  );
}

export default SearchPage;
