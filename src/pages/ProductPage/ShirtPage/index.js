import ProductCard from "../../../components/ProductCard";
import shirts from "../../../database/shirtsdb.json";
import styles from "./ShirtPage.module.css";

function ShirtPage() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <ProductCard products={shirts} />
      </div>
    </div>
  );
}

export default ShirtPage;