import { useSearchParams } from "react-router-dom";
import styles from "./SearchPage.module.css";
import shirts from "../../../database/shirtsdb.json";
import pants from "../../../database/pantsdb.json";
import shorts from "../../../database/shortsdb.json";
import sweatshirts from "../../../database/sweatshirtdb.json";
import ProductCard from "../../../components/ProductCard";

function SearchPage() {
  const products = [...shirts, ...shorts, ...sweatshirts, ...pants];
  const [searchParams] = useSearchParams();
  const data = searchParams.get("data") || "";

  const filteredProducts = products.filter((product) => {
    const metaMatches = Array.isArray(product.meta)
      ? product.meta.some((tag) =>
          tag.toLowerCase().includes(data.toLowerCase())
        )
      : product.meta?.toLowerCase().includes(data.toLowerCase());

    const nameMatches = product.name.toLowerCase().includes(data.toLowerCase());

    return metaMatches || nameMatches;
  });

  return (
    <>
      <div className={styles.title}>
        <h1>Resultados para "{data}"</h1>
      </div>
      <div className={styles.container}>
        {filteredProducts.length > 0 ? (
          <ProductCard products={filteredProducts} />
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>
    </>
  );
}

export default SearchPage;
