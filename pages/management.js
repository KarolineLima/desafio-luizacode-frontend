import { useEffect, useState } from 'react'
import styles from '../styles/Management.module.css'
import Footer from '../components/Footer/Footer';
import FirstNavbar from '../components/FirstNavbar/FirstNavbar';

export default function Management() {
  return (
    <>
      <FirstNavbar />
      <div className={styles.root}>
        <div className={styles.container}>
          <h2>Pedidos Pendentes</h2>

          <div className={styles.propertyManagement}>
            <table>
              <tr>
                <th className={styles.information}>Número</th>
                <th className={styles.information}>Pedido</th>
                <th className={styles.information}>Endereço Retirada</th>
                <th className={styles.information}>Data</th>
                <th className={styles.information}>Total</th>
                <th className={styles.information}>Ações</th>
              </tr>
              <hr className={styles.line}/>
              <tr>
                <th>teste</th>
                <th>teste</th>
                <th>teste</th>
                <th>teste</th>
                <th>teste</th>
                <th>Status</th>
              </tr>
            </table>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}