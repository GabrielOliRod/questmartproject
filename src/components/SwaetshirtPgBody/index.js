import styles from "./SweatshirtPgBody.module.css";
import sweatshirts from "../../database/sweatshirtdb.json";

function SweatshirtPgBody() {
  return (
    <div className={styles.container}>
      {sweatshirts.map((sweatshirt) => (
        <div key={sweatshirt.id}>
          <div className={styles.productCard}>
            <img src={sweatshirt.photo} alt={sweatshirt.name} />
            <h5 style={{ marginTop: "2vh" }}>{sweatshirt.name}</h5>
            <p>{sweatshirt.price}</p>
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

export default SweatshirtPgBody;