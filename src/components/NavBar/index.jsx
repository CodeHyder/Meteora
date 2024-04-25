import logo from '../../assets/Logodesktop.png'
import styles from './NavBar.module.css'

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <div className={styles.navBarContainer}>
                <div className={styles.navListContainer}>
                    <img src={logo} alt="Logo da loja Meteora" className={styles.navLogo}/>
                    <ul className={styles.navList}>
                        <li className={styles.navListItem}>
                            <a href='/' className={styles.navListLink}>Lojas</a>
                        </li>
                        <li className={styles.navListItem}>
                            <a href='/' className={styles.navListLink}>Home</a>
                        </li>
                        <li className={styles.navListItem}>
                            <a href='/' className={styles.navListLink}>Novidades</a>
                        </li>
                        <li className={styles.navListItem}>
                            <a href='/' className={styles.navListLink}>Promoções</a>
                        </li>
                    </ul>
                </div>

                <form action="" className={styles.navFormContainer}>
                    <input type="text" name="" className={styles.navFormInput} placeholder='Digite o produto'/>
                    <button className={styles.navFormButton}>Buscar</button>
                </form>
            </div>
        </nav>
    )
}

export default NavBar;