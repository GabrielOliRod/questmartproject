import React, { useState } from "react";
import styles from "./LoginContainer.module.css";
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

function LoginContainer({ defaultToSignUp = false }) {
  // Estado para controlar se a tela ativa é de cadastro ou login
  const [isActive, setIsActive] = useState(defaultToSignUp);

  return (
    </*Container principal*/>
      <h1 className={styles.title}>PREENCHA SEUS DADOS PARA CONTINUAR</h1>
      
      {/*Container seções de login e cadastro*/}
      <div
        className={`${styles.container} ${isActive ? styles.active : ""}`}
        id="container"
      >
        {/*Container Formulário de Cadastro*/}
        <div className={styles.formContainer + " " + styles.signUp}>
          <form>
            <h1>
              Crie sua
              <br /> Conta
            </h1>
            
            {/*Container Ícones*/}
            <div className={styles.socialIcons}>
              <a href="/login" className={styles.icon}>
                <FaGoogle />
              </a>
              <a href="/login" className={styles.icon}>
                <FaFacebookF />
              </a>
              <a href="/login" className={styles.icon}>
                <FaGithub />
              </a>
              <a href="/login" className={styles.icon}>
                <FaLinkedinIn />
              </a>
            </div>
            <span>ou use seu email para se registrar</span>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button>Avançar</button>
          </form>
        </div>
        
        {/* Container Formulário de Login */}
        <div className={styles.formContainer + " " + styles.signIn}>
          <form>
            <h1>Login</h1>
            <div className={styles.socialIcons}>
              <a href="/login" className={styles.icon}>
                <FaGoogle />
              </a>
              <a href="/login" className={styles.icon}>
                <FaFacebookF />
              </a>
              <a href="/login" className={styles.icon}>
                <FaGithub />
              </a>
              <a href="/login" className={styles.icon}>
                <FaLinkedinIn />
              </a>
            </div>
            <span>ou use seu email e senha para entrar</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <a href="/login">Esqueceu sua senha?</a>
            <button>Entrar</button>
          </form>
        </div>
        
        {/*Container sobreposição entre login e cadastro*/}
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            
            {/*Container Painel tela de login*/}
            <div className={styles.overlayPanel + " " + styles.overlayLeft}>
              <h1>Que prazer te rever!</h1>
              <p>Para continuar conectado entre com seus dados</p>
              <button
                className={styles.ghost}
                id="signIn"
                onClick={() => setIsActive(false)}
              >
                Entrar
              </button>
            </div>
            
            {/*Container Painel tela de login cadastro*/}
            <div className={styles.overlayPanel + " " + styles.overlayRight}>
              <h1>Bem-vindo!</h1>
              <p>Entre com seus dados pessoais para conectar-se com a gente</p>
              <button
                className={styles.ghost}
                id="signUp"
                onClick={() => setIsActive(true)}
              >
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginContainer;