import LoginContainer from "../../components/LoginContainer"
import styles from "./LoginPage.module.css"

function LoginPage(){
    return(
        <>
            <body className={styles.bodyContainer}>
                <LoginContainer />
            </body>
        </>
    )
}

export default LoginPage