import ProductCard from "../../../components/ProductCard";
import shorts from "../../../database/shortsdb.json";
import styles from "./ShortsPage.module.css";

function ShortsPage() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <ProductCard products={shorts} />
      </div>
    </div>
  );
}

export default ShortsPage;
