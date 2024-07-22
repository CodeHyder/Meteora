import logo from '../../assets/Logodesktop.png';
import styles from './NavBar.module.css';
import { data } from './data';
import menuIcon from '../../assets/icon-menu.svg';
import closeMenu from '../../assets/fechar.png';
import { useState } from 'react';


function NavBar() {

    const [isMenuOpen, setisMenuOpen] = useState(false);

    const openHandler = () => {

        if (isMenuOpen) {
            setisMenuOpen(false)
        } else {
            setisMenuOpen(true)
        }
    }

    return (
        <nav className={styles.navBar}>
            <div className={styles.navBar__container}>
                <div className={styles.navListContainer}>
                    <img src={logo} alt="Logo da loja Meteora" className={styles.navBar__logo} />
                    <img src={menuIcon} 
                        alt='icone do menu'
                        className={isMenuOpen 
                        ? styles.iconInvisible
                        : `${styles.menuIcon} ${styles.iconVisible}`
                        }
                        onClick={() => openHandler()}
                    />
                    <ul className={
                        isMenuOpen 
                        ? `${styles.navList} ${styles.menu__visible}`
                        : `${styles.menu__hidden} ${styles.navList}`
                    }>
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
                    <img src={closeMenu}
                        className={
                            isMenuOpen 
                            ? `${styles.closeMenu} ${styles.iconVisible}`
                            : styles.iconInvisible} onClick={() => openHandler()} 
                        />
                </div>

                <form action="" className={styles.navFormContainer}>
                    <input type="text" name="" className={styles.navFormInput} placeholder='Digite o produto' />
                    <button className={styles.navFormButton}>Buscar</button>
                </form>
            </div>
        </nav>
    )
}

export default NavBar