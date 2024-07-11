import styles from "./SubHeader.module.css"

function SubHeader(){
    return(
        <div className={styles.containerSubHeader}>
            <div className={styles.left}>
            <a href="/">Animes</a>
            <a href="/">Jogos</a>
            <a href="/">Estampas Personalizadas</a>
            <a href="/">Itens Exclusivos</a>            
            <a href="/">Canecas</a>
            <a href="/">Bonecos</a>
            </div>
            <div className={styles.right}>
            <a href="/">Atendimento</a>
            <a href="/">Sobre Nós</a>
            </div>
        </div>
    )
}

export default SubHeader