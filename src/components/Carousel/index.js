import styles from "./Carousel.module.css";
import Carousel from "react-bootstrap/Carousel";
import photoOne from "./photoone.PNG";

function CarouselHome() {
  return (
    <div className={styles.carouselContainer}>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img src={photoOne} alt="First Pic" text="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src={photoOne} alt="Sec Pic" text="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={photoOne} alt="Third Pic" text="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselHome;
