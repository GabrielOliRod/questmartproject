import { useState } from "react";
import styles from "./ContactUsBody.module.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function ContactUsBody() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {language === "en" ? "Contact Us!" : "Nos contate!"}
      </h1>
      <p className={styles.subtitle}>
        {language === "en"
          ? "Feel free to reach out through any of the platforms below."
          : "Fique à vontade para entrar em contato por qualquer plataforma abaixo."}
      </p>

      <div className={styles.contactContainer}>
        <div className={styles.contactList}>
          <a
            href="https://www.linkedin.com/in/gabrielolirod/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactItem}
          >
            <FaLinkedin className={styles.icon} />
            LinkedIn
          </a>

          <a
            href="https://github.com/GabrielOliRod"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactItem}
          >
            <FaGithub className={styles.icon} />
            GitHub
          </a>

          <a href="mailto:gabrieloliroddev@gmail.com" className={styles.contactItem}>
            <FaEnvelope className={styles.icon} />
            Email
          </a>
        </div>

        <button className={styles.languageButton} onClick={toggleLanguage}>
          {language === "en" ? "PT" : "EN"}
        </button>
      </div>
    </div>
  );
}

export default ContactUsBody;