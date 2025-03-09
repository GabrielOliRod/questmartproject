import { useState } from "react";
import styles from "./AboutUsBody.module.css";
import photo from "../../database/Imgs/mypicture.jpg";

function AboutUsBody() {
  const [language, setLanguage] = useState("en");

  // Função para alternar os idiomas
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "pt" : "en"));
  };

  return (
    <div className={styles.container} /*container principal*/>
      <img src={photo} alt="Gabriel" className={styles.photo} />
      <div className={styles.info}/*Container Textos*/>
        <h1>{language === "en" ? "Hi everyone!" : "Olá, pessoal!"}</h1>
        <p>
          {language === "en"
            ? "My name's Gabriel, I'm 20 years old. I've always been passionate about programming and computing. Since I was young, the computer has felt like my second home, so I decided to study at Instituto Federal, a high school with an IT technical course. There, I discovered my passion for programming even more, especially JavaScript. Now, I'm in college at Universidade São Francisco, studying ADS (Analysis and Systems Development)."
            : "Meu nome é Gabriel, tenho 20 anos. Sempre fui apaixonado por programação e computação. Desde pequeno, o computador sempre foi minha segunda casa, então decidi estudar no Instituto Federal, um ensino médio técnico em informática. Lá, descobri ainda mais minha paixão pela programação, especialmente JavaScript. Agora, estou na Universidade São Francisco, cursando ADS (Análise e Desenvolvimento de Sistemas)."}
        </p>
        <h2>
          {language === "en" ? "Main languages:" : "Principais linguagens:"}
        </h2>
        <p>HTML, CSS, JS, REACT JS, PHP</p>
        <p>
          {language === "en"
            ? "Organized, proactive, always willing to help. I have excellent public speaking skills, a knack for learning, and I work well in a team. I consider myself highly adaptable and flexible when faced with challenges, and I have a great ability to come up with new ways to solve them."
            : "Organizado, proativo e sempre disposto a ajudar. Tenho excelentes habilidades de comunicação, facilidade de aprendizado e trabalho bem em equipe. Me considero altamente adaptável e flexível diante de desafios, com uma grande capacidade de encontrar novas soluções para problemas."}
        </p>
        <div className={styles.buttons} /*Container dos botões*/>
          <a
            href="https://www.linkedin.com/in/gabrielolirod/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedin}
          >
            {language === "en" ? "Visit my LinkedIn" : "Visite meu LinkedIn"}
          </a>
          <button onClick={toggleLanguage} className={styles.button}>
            {language === "en" ? "Mudar para Português" : "Switch to English"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUsBody;
