import styles from './Categorias.module.css';
import { data } from './data';

function Categorias() {

    return (

        <section className={styles.categoriasContainer}>
            <h3 className={styles.categoriasTitulo}>Busque por categoria:</h3>
            <div className={styles.categorias__container}>
                <div className={styles.categoriasItemsContainer}>
                    {data.map((item) => {
                        return (
                            <a className={styles.categoriasItem} href={item.href}>
                                <img src={item.src} alt={item.alt} className={styles.categoriasImagem} />
                                <p className={styles.categoriasTexto}>{item.nome}</p>
                            </a>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Categorias;