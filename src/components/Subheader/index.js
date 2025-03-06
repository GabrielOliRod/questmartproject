import styles from "./SubHeader.module.css"

function SubHeader(){
    return(
        <div className={styles.containerSubHeader}>
            <div className={styles.left}>
                <a href="ResultadoPesquisa?data=animes">Animes</a>
                <a href="ResultadoPesquisa?data=jogos">Jogos</a>
                <a href="ResultadoPesquisa?data=rock">Rock</a>          
                <a href="ResultadoPesquisa?data=desenhos" className={styles.hideOnLarge}>Desenhos</a>
                <a href="ResultadoPesquisa?data=bonecos" className={styles.hideOnLarge}>Bonecos</a>
                <a href="ResultadoPesquisa?data=itens exclusivos" className={styles.hideOnLarge}>Itens Exclusivos</a>  
            </div>
            <div className={styles.right}>
                <a href="/Atendimento">Atendimento</a>
                <a href="/SobreNos">Sobre Nós</a>
            </div>
        </div>
    )
}

export default SubHeader;