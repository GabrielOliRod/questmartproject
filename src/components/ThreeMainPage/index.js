import styles from "./Three.module.css";

function Three() {
  return (
    <div className={styles.containerLeft} /*Container Principal*/>
      <div className={styles.containerLeftImg} /*Container Itens Esquerda*/>
        <a href="ResultadoPesquisa?data=oversized">
          <img
            src="https://i.ibb.co/mbk9hjK/oversizedphoto.png"
            alt="Oversized"
          />
        </a>
      </div>
      <div className={styles.containerRight} /*Container Itens Direita*/>
        <a href="ResultadoPesquisa?data=canecas">
          <img src="https://i.ibb.co/dkgBd8T/canecas.jpg" alt="Canecas" />
        </a>
        <a href="ResultadoPesquisa?data=quadros">
          <img src="https://i.ibb.co/2hX0G1W/quadros.jpg" alt="Quadros" />
        </a>
      </div>
    </div>
  );
}

export default Three;
