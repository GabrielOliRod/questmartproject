import styles from "./SubHeader.module.css"

function SubHeader(){
    return(
        <div className={styles.containerSubHeader}/*Container Principal*/>
            <div className={styles.left}/*Container Itens Esquerda*/>
                <a href="ResultadoPesquisa?data=animes">Animes</a>
                <a href="ResultadoPesquisa?data=jogos">Jogos</a>
                <a href="ResultadoPesquisa?data=rock">Rock</a>          
                <a href="ResultadoPesquisa?data=desenhos" className={styles.hideOnLarge}>Desenhos</a>
                <a href="ResultadoPesquisa?data=gym" className={styles.hideOnLarge}>Gym</a>
                <a href="ResultadoPesquisa?data=itens exclusivos" className={styles.hideOnLarge}>Itens Exclusivos</a> 
            </div>
            <div className={styles.right}/*Container Itens Direita*/>
                <a href="/Atendimento">Atendimento</a>
                <a href="/SobreNos">Sobre Nós</a>
            </div>
        </div>
    )
}

export default SubHeader;