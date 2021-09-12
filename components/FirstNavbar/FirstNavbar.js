import styles from './FirstNavbar.module.css';
import { UserCircleIcon, ShoppingCartIcon } from '@heroicons/react/outline';

export default function FirstNavbar() {
    return(
        <>
        <nav className={styles.navBar}>
          <div className={styles.navbarContainer}>
            <img className={styles.logoImg} src="logo_size.jpg" alt="logo loja"></img>
            <input name="search" className={styles.searchNavBar} placeholder="Pesquisar" />
            <div className={styles.userAndCartBottom}>
              <UserCircleIcon className={styles.userIcon} />
              <ShoppingCartIcon className={styles.shoppingCartIcon} />
            </div>
          </div>
        </nav>
        </>
    )
}