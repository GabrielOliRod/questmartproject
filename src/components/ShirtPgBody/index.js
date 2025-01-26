import styles from "./ShirtPgBody.module.css";
import shirts from "../../database/shirtsdb.json";
import "swiper/css"; // Importando os estilos do Swiper
import "swiper/css/pagination"; // Importando estilos do módulo de paginação

function ShirtPgBody() {
  return (
    <div className={styles.container}>
      {shirts.map((shirt) => (
        <div key={shirt.id}>
          <div className={styles.productCard}>
            <img src={shirt.photo} alt={shirt.name} />
            <h5 style={{ marginTop: "2vh" }}>{shirt.name}</h5>
            <p>{shirt.price}</p>
            <a href="/">
              <button type="button" className="btn btn-dark">
                Ver Produto
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShirtPgBody;
