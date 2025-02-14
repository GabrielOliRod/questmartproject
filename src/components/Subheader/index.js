import styles from "./SubHeader.module.css"

function SubHeader(){
    return(
        <div className={styles.containerSubHeader}>
            <div className={styles.left}>
            <a href="ResultadoPesquisa?data=animes">Animes</a>
            <a href="ResultadoPesquisa?data=jogos">Jogos</a>
            <a href="ResultadoPesquisa?data=estampas personalizadas">Estampas Personalizadas</a>
            <a href="ResultadoPesquisa?data=itens exclusivos">Itens Exclusivos</a>            
            <a href="ResultadoPesquisa?data=canecas">Canecas</a>
            <a href="ResultadoPesquisa?data=bonecos">Bonecos</a>
            </div>
            <div className={styles.right}>
            <a href="/Atendimento">Atendimento</a>
            <a href="/SobreNos">Sobre Nós</a>
            </div>
        </div>
    )
}

export default SubHeader