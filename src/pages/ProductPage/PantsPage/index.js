import pants from "../../../database/pantsdb.json";
import ProductCard from "../../../components/ProductCard";
import styles from "./PantsPage.module.css";

function PantsPage() {
  return (
    //Página de "Calças"
    <div className={styles.body/*Container Principal*/}>
      <div className={styles.container}/*Container Itens*/>
        <ProductCard products={pants} />
      </div>
    </div>
  );
}

export default PantsPage;
