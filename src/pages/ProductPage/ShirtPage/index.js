import ProductCard from "../../../components/ProductCard";
import shirts from "../../../database/shirtsdb.json";
import styles from "./ShirtPage.module.css";

function ShirtPage() {
  return (
    //Página de "Camisetas"
    <div className={styles.body}/*Container Principal*/>
      <div className={styles.container}/*Container Itens*/>
        <ProductCard products={shirts} />
      </div>
    </div>
  );
}

export default ShirtPage;