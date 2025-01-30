import styles from "./Header.module.css";
import { CiSearch } from "react-icons/ci";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const navigateloginpage = () => {
    navigate("/Login");
  };

  const navigateshirtpage = () => {
    navigate("/Camisetas");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/ResultadoPesquisa?data=${encodeURIComponent(inputValue)}`);
    }
  };


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
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Busque por produtos aqui..."
          ></input>
        </div>

        <div className={styles.headerSection}>
          <a href="/Camisetas">
            <h1 onClick={navigateshirtpage}>CAMISETAS</h1>
          </a>
          <a href="/Calcas">
            <h1>CALÇAS</h1>
          </a>
          <a href="/Shorts">
            <h1>SHORTS</h1>
          </a>
          <a href="/Moletons">
            <h1>MOLETONS</h1>
          </a>
        </div>

        <div className={styles.headerButtons}>
          <div className={styles.headerButtonLogin}>
            <Button onClick={navigateloginpage} variant="outline-dark">
              Login
            </Button>
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
