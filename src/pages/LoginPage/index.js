import { useLocation } from "react-router";
import LoginContainer from "../../components/LoginContainer";
import styles from "./LoginPage.module.css";

function LoginPage() {
  //Localiza o parametro presente na URL
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  //Verifica qual o parametro, caso seja o "singup"(cadastro), inicia na tela de cadastro
  const defaultToSignUp = searchParams.get("signup") === "true";
  
  return (
    <>
      <body className={styles.bodyContainer} /*Container Principal*/>
        {/*Renderiza o componente de acordo com a URL*/}
        <LoginContainer defaultToSignUp={defaultToSignUp} />
      </body>
    </>
  );
}

export default LoginPage;