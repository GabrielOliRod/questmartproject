import { useSearchParams } from "react-router-dom";
import styles from "./SearchPage.module.css";
import { useEffect } from "react";
import shirts from "../../../database/shirtsdb.json";
import pants from "../../../database/pantsdb.json";
import shorts from "../../../database/shortsdb.json";
import sweatshirts from "../../../database/sweatshirtdb.json";

function SearchPage() {
  const products = [...shirts, ...shorts, ...sweatshirts, ...pants];
  const [searchParams] = useSearchParams();
  const data = searchParams.get("data");

  useEffect(() => {});

  return (
    <>
      <div className={styles.title}>
        <h1>Resultados para "{data}"</h1>
      </div>
      <div className={styles.container}>
        {products
          .filter((product) =>
            Array.isArray(product.meta)
              ? product.meta.some((tag) =>
                  tag.toLowerCase().includes(data.toLowerCase())
                )
              : product.meta &&
                product.meta.toLowerCase().includes(data.toLowerCase()) &&
                product.name.toLowerCase().includes(data.toLowerCase())
          )
          .map((product) => (
            <div key={product.id}>
              <div className={styles.productCard}>
                <img src={product.photo} alt={product.name} />
                <h5 style={{ marginTop: "2vh" }}>{product.name}</h5>
                <p>{product.price}</p>
                <a href="/">
                  <button type="button" className="btn btn-dark">
                    Ver Produto
                  </button>
                </a>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default SearchPage;
