import styles from "./PantsPgBody.module.css";
import pants from "../../database/pantsdb.json";
import "swiper/css"; // Importando os estilos do Swiper
import "swiper/css/pagination"; // Importando estilos do módulo de paginação

function PantsPgBody() {
  return (
    <div className={styles.container}>
      {pants.map((pant) => (
        <div key={pant.id}>
          <div className={styles.productCard}>
            <img src={pant.photo} alt={pant.name} />
            <h5 style={{ marginTop: "2vh" }}>{pant.name}</h5>
            <p>{pant.price}</p>
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

export default PantsPgBody;
