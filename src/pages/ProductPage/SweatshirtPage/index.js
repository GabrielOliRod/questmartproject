import ProductCard from "../../../components/ProductCard";
import sweatshirts from "../../../database/sweatshirtdb.json";
import styles from "./Sweatshirt.module.css";

function SweatshirtPage() {
  return (
    <div className={styles.container}>
      <ProductCard products={sweatshirts} />
    </div>
  );
}

export default SweatshirtPage;
