import styles from "./Header.module.css";
import { CiSearch } from "react-icons/ci";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()

  const navigateloginpage = () =>{
    navigate('/Login')
  }
  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          {/* <img src={logo} alt="Logo QuestMart" /> */}
          <a href="/">
            <h1>QuestMart</h1>
          </a>
        </div>

        <div className={styles.headerSearchBar}>
          <div className={styles.headerSearchBarSvg}>
            <CiSearch />
          </div>
          <input placeholder="Busque por produtos aqui..."></input>
        </div>

        <div className={styles.headerSection}>
          <a href="/">
            <h1>CAMISETAS</h1>
          </a>
          <a href="/">
            <h1>CALÇAS</h1>
          </a>
          <a href="/">
            <h1>SHORTS</h1>
          </a>
          <a href="/">
            <h1>MOLETONS</h1>
          </a>
        </div>

        <div className={styles.headerButtons}>
          <div className={styles.headerButtonLogin}>
            <Button onClick={navigateloginpage} variant="outline-dark">Login</Button>
          </div>
          <div className={styles.headerButtonSignUp}>
            <Button variant="outline-dark">Cadastro</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;