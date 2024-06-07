import Carousel from 'react-bootstrap/Carousel';
import styles from './Carrousels.module.css'; 
import React, { useState, useEffect } from 'react';

function Carrousels({ props }) {
    
    const [imageSrcs] = useState({
        desktop: props.map((item) => item.srcDesktop),
        mobile: props.map((item) => item.srcMobile),
        tablet: props.map((item) => item.srcTablet),
      });

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <Carousel>
            {props.map((item, index) => {
                return (
                    
                    <Carousel.Item key={index}>
                        <img
                            className={styles.bannerImg}
                            src={
                                 screenWidth < 642 
                                ? imageSrcs.mobile[index]
                                : screenWidth < 915 
                                ? imageSrcs.tablet[index]   
                                : imageSrcs.desktop[index]  
                            }
                            alt={item.alt}
                        />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}

export default Carrousels;