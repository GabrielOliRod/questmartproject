import ProductCard from "../../../components/ProductCard";
import sweatshirts from "../../../database/sweatshirtdb.json";
import styles from "./Sweatshirt.module.css";

function SweatshirtPage() {
  return (
    //Página de "Moletons"
    <div className={styles.container}/*Container Principal*/>
      <ProductCard products={sweatshirts} />
    </div>
  );
}

export default SweatshirtPage;
