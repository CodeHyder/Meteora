import Carousel from 'react-bootstrap/Carousel'; 
import styles from './Carrousels.module.css';

function Carrousels({ props }) {
    return (

        <Carousel>
            {props.map((item) => {
                return (
                    <Carousel.Item>
                        <img
                            className={styles.bannerImg}
                            src={item.src}
                            alt={item.alt}
                        />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}

export default Carrousels;