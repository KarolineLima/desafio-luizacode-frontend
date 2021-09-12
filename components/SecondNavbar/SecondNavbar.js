import styles from './SecondNavbar.module.css';
import Link from 'next/link'

export default function (){
    return(
        <>
         <nav className={styles.containerNavBarSecond}>
          <div className={styles.bottomNav} >
            <Link href='/category' className={styles.linkNavBar} >Calças </Link>
            <Link href='/category' className={styles.linkNavBar} > Shorts</Link>
            <Link href='/category' className={styles.linkNavBar} >Vestidos </Link>
            <Link href='/category' className={styles.linkNavBar} >Camisas </Link>
          </div>
        </nav>
        </>
    )
}