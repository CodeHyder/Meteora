import logo from '../../assets/Logodesktop.png';
import styles from './NavBar.module.css';
import { data } from './data';
import menuIcon from '../../assets/icon-menu.svg';
import closeMenu from '../../assets/marca-cruzada.svg';

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <div className={styles.navBar__container}>
                <div className={styles.navListContainer}>
                    <img src={logo} alt="Logo da loja Meteora" className={styles.navBar__logo} />
                    <img src={menuIcon} alt='icone do menu' className={styles.menuIcon} />
                    <ul className={styles.navList}>

                        {data.map((item) => {
                            return (
                                <>
                                    <li
                                        className={styles.navList__item}
                                        key={item.id}
                                        href={item.href}
                                    >
                                        <a className={styles.navList__link}>{item.nome}</a>
                                    </li>
                                    <div className={styles.navListLine}></div>
                                </>
                            )
                        })}
                    </ul>
                </div>

                <form action="" className={styles.navFormContainer}>
                    <input type="text" name="" className={styles.navFormInput} placeholder='Digite o produto' />
                    <button className={styles.navFormButton}>Buscar</button>
                </form>
            </div>
        </nav>
    )
}

export default NavBar;