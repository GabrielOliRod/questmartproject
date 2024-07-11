import CarouselHome from "../../components/Carousel";
import SectionsClotherHome from "../../components/SectionsClothesHome";
import styles from "./HomePage.module.css";

function HomePage() {


  return (
    <div className={styles.containerHome}>
      <body className={styles.body}>
      <CarouselHome />
      <SectionsClotherHome />
      </body>
    </div>
  );
}

export default HomePage;
