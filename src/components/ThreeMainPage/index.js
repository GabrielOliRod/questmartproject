import styles from "./Three.module.css";

function Three() {
  return (
    <div className={styles.containerLeft}>
        <div className={styles.containerLeftImg}>
      <img
        src="https://i.ibb.co/mbk9hjK/oversizedphoto.png"
        alt="Oversized"
      />
      </div>
      <div className={styles.containerRight}>
      <img
        src="https://i.ibb.co/dkgBd8T/canecas.jpg"
        alt="Canecas"
      />
      <img
        src="https://i.ibb.co/2hX0G1W/quadros.jpg"
        alt="Quadros"
      />
    </div>
    </div>
  );
}

export default Three;
