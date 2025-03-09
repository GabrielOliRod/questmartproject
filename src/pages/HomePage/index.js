import CarouselHome from "../../components/Carousel";
import SectionsClotherHome from "../../components/SectionsClothesHome";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    //Página Principal
    <div className={styles.containerHome} /*Container Principal*/>
      <body className={styles.body} /*Container Itens da página*/>
        <CarouselHome />
        <SectionsClotherHome />
      </body>
    </div>
  );
}

export default HomePage;
