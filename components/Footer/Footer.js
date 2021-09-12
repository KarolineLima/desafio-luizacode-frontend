import styles from "./Footer.module.css";

export default function FooterCard(){
    return(
        <footer className={styles.footerPages} >

        <div className={styles.footerAllmessage}>
          <div className={styles.footerContact}>
            <h3>CONTATO</h3>
            <h4>+55 (013) 9 3235-6893 </h4>
          </div>
          <div className={styles.footerAdress}>
            <h3>ENDEREÇO</h3>
            <h4>Av. Morro de  São Bernado 695   </h4>
            <h4> Prédio comercial Augusto Severo</h4>
          </div>

          <div className={styles.footerTreatment}>
            <h3>ATENDIMENTO </h3>
            <h4>SEGUNDA A QUINTA </h4>
            <h4> 9h às 18h</h4>
            <h4> SEXTA  </h4>
            <h4>9h às 17h </h4>
          </div>


        </div>
      </footer>
    )
}