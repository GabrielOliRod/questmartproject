import ProductCard from "../../../components/ProductCard";
import shorts from "../../../database/shortsdb.json";
import styles from "./ShortsPage.module.css";

function ShortsPage() {
  return (
    //Página de "Shorts"
    <div className={styles.body}/*Container Principal*/>
      <div className={styles.container}/*Container Itens*/>
        <ProductCard products={shorts} />
      </div>
    </div>
  );
}

export default ShortsPage;
