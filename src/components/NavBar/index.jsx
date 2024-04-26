import logo from '../../assets/Logodesktop.png'
import styles from './NavBar.module.css'

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <div className={styles.navBar__container}>
                <div className={styles.navListContainer}>
                    <img src={logo} alt="Logo da loja Meteora" className={styles.navBar__logo}/>
                    <ul className={styles.navList}>
                        <li className={styles.navList__item}>
                            <a href='/' className={styles.navList__link}>Lojas</a>
                        </li>
                        <li className={styles.navList__item}>
                            <a href='/' className={styles.navList__link}>Home</a>
                        </li>
                        <li className={styles.navList__item}>
                            <a href='/' className={styles.navList__link}>Novidades</a>
                        </li>
                        <li className={styles.navList__item}>
                            <a href='/' className={styles.navList__link}>Promoções</a>
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