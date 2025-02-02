import pants from "../../../database/pantsdb.json";
import ProductCard from "../../../components/ProductCard";
import styles from "./PantsPage.module.css";

function PantsPage() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <ProductCard products={pants} />
      </div>
    </div>
  );
}

export default PantsPage;
