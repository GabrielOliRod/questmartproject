import AboutUsBody from "../../components/AboutUsBody";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    //Página "Sobre Nós"
    <div className={styles.container} /*Container Principal*/>
      <AboutUsBody />
    </div>
  );
}

export default AboutUs;
