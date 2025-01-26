import styles from "./ShortsPgBody.module.css";
import shorts from "../../database/shortsdb.json";

function ShortsPgBody() {
  return (
    <div className={styles.container}>
      {shorts.map((short) => (
        <div key={short.id}>
          <div className={styles.productCard}>
            <img src={short.photo} alt={short.name} />
            <h5 style={{ marginTop: "2vh" }}>{short.name}</h5>
            <p>{short.price}</p>
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

export default ShortsPgBody;