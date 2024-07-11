import styles from "./Three.module.css";

function Three() {
  return (
    <div className={styles.containerLeft}>
        <div className={styles.containerLeftImg}>
      <img
        src="https://i.pinimg.com/736x/ed/0b/71/ed0b713a634ff692134bf17577693315.jpg"
        alt="a"
      />
      </div>
      <div className={styles.containerRight}>
      <img
        src="https://img.freepik.com/fotos-gratis/loja-de-roupas-loja-de-roupas-em-cabide-na-boutique-loja-moderna_1150-8886.jpg"
        alt="a"
      />
      <img
        src="https://blog.bling.com.br/wp-content/uploads/2023/09/como-abrir-loja-de-roupas-masculinas-1024x576.png?x99143"
        alt="a"
      />
    </div>
    </div>
  );
}

export default Three;
