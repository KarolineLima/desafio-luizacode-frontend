import { useEffect, useState } from 'react'
import styles from '../styles/Category.module.css'
import Footer from '../components/Footer/Footer';
import FirstNavbar from '../components/FirstNavbar/FirstNavbar';

export default function Category() {
  return (
    <>
    <FirstNavbar/>
    <div className={styles.container}>
      <h1>página de categoria</h1>
    </div>

    <Footer/>
    </>
  )
}