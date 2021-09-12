import styles from './FirstNavbar.module.css';
import { UserCircleIcon, ShoppingCartIcon } from '@heroicons/react/outline';

export default function FirstNavbar() {
    return(
        <>
        <nav className={styles.navBar}>
          <div className={styles.navbarContainer}>
          <a href='/'> <img className={styles.logoImg} src="logo_size.jpg" alt="logo loja"/> </a> 
            <input name="search" className={styles.searchNavBar} placeholder="Pesquisar" />
            <div className={styles.userAndCartBottom}>
             <a href='#'><UserCircleIcon className={styles.userIcon} /></a>
             <a href='#'><ShoppingCartIcon className={styles.shoppingCartIcon} /></a>
            </div>
          </div>
        </nav>
        </>
    )
}