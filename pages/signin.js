import { useEffect, useState } from 'react'
import styles from '../styles/SignIn.module.css'
import Footer from '../components/Footer/Footer';
import FirstNavbar from '../components/FirstNavbar/FirstNavbar';

export default function SignIn() {
    return (
        <>
            <FirstNavbar />
            <body className={styles.singInContainer}>
                <h2 className={styles.titleName}>Criar uma conta</h2>
                <div className={styles.buttomSingInContainer}>
                <h4 className={styles.infoContainer}>Nome</h4>
                <input name="singInButtom" className={styles.inputName} />
                <h4 className={styles.infoContainer}>Email</h4> 
                <input name="singInButtom" className={styles.inputName} />
                <h4 className={styles.infoContainer}>Data de nascimento</h4> 
                <input name="singInButtom" className={styles.inputName} />
                <h4 className={styles.infoContainer}>Telefone</h4> 
                <input name="singInButtom" className={styles.inputName} />
                <h4 className={styles.infoContainer}>Endereço</h4> 
                <input name="singInButtom" className={styles.inputName} />
                <h4 className={styles.infoContainer}>Senha</h4> 
                <input name="singInButtom" className={styles.inputName} />
                <h4 className={styles.infoContainer}>Confirmar senha</h4> 
                <input name="singInButtom" className={styles.inputName} />
                </div>
                <button type="button" name="confirmButton" className={styles.confirmButtton}>Cadastrar </button>
                </body>
            <Footer />
        </>
    )
}