import styles from "./Header.module.css";
import { CiSearch } from "react-icons/ci";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  // Armazena o valor digitado pra pesquisa
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const navigateloginpage = () => {
    navigate("/Login&Cadastro");
  };

  // Se pressionado o Enter, redireciona para a página de resultados da pesquisa com o valor digitado
  // Ocorre um bug na pesquisa que muitas vezes retornam alguns produto nada a ver, ainda não descobri como sanar
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/ResultadoPesquisa?data=${encodeURIComponent(inputValue)}`);
    }
  };

  return (
    <header>
      <div className={styles.headerContainer} /*Container Principal*/>
        <div className={styles.headerLogo} /*Container Logo*/>
          {/* <img src={logo} alt="Logo QuestMart" /> */}
          <a href="/">
            <h1>QuestMart</h1>
          </a>
        </div>

        <div className={styles.headerSearchBar} /*Container SearchBar*/>
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

        <div className={styles.headerSection} /*Container Seção de Roupas*/>
          <a href="/Camisetas">
            <h1>CAMISETAS</h1>
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

        <div className={styles.headerButtons} /*Container Botões*/>
          <div className={styles.headerButtonLogin}>
            <Button onClick={navigateloginpage} variant="outline-dark">
              Login
            </Button>
          </div>
          <div className={styles.headerButtonSignUp}>
            <Button
              onClick={() => navigate("/Login&Cadastro?signup=true")}
              variant="outline-dark"
            >
              Cadastro
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
