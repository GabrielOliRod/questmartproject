import styles from "./Carousel.module.css";
import Carousel from "react-bootstrap/Carousel";

function CarouselHome() {
  return (
    <div className={styles.carouselContainer} /*Container do Carrossel*/>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className={`${styles.carouselImage} ${styles.primeiraImagem}`}
            src="https://montink.s3.amazonaws.com/perfil_montink/17285655776707d1492c4a6.jpg"
            alt="First Pic"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className={styles.carouselImage}
            src="https://mais1nerd.com.br/wp-content/uploads/2023/11/camiseta-banner-desktop.jpg.webp"
            alt="Second Pic"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className={`${styles.carouselImage} ${styles.terceiraImagem}`}
            src="https://images.mont.ink/323635343430/d90e07050e2c3924f3a657b18419c311.png"
            alt="Third Pic"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselHome;
