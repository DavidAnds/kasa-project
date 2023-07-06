import styles from './carrousel.module.css';
import {useState, useRef, useLayoutEffect} from "react";
import {BiChevronRight, BiChevronLeft} from "react-icons/bi";


function Carrousel ({images}) {
    const [currentImage, setCurrentImage] = useState(0);
    const [widthCarrousel, setWidthCarrousel] = useState(0);
    const ref = useRef(null);

    useLayoutEffect(() => {
        setWidthCarrousel(ref.current.offsetWidth)
    }, [])


    const nextImage = () => {
        setCurrentImage(currentImage < images.length - 1 ? currentImage + 1 : 0)
    }

    const prevImage = () => {
        setCurrentImage(currentImage > 0 ? currentImage - 1 : images.length - 1)
    }

    return (
        <div className={styles.carrousel} ref={ref}>
            {
                images.map((image, index) => {
                    return (
                        <div className={styles.carrousel_item} key={index} style={{translate: (index*widthCarrousel) - (currentImage*widthCarrousel)}}>
                            <img src={image} className={styles.carrousel_image} alt="Housing" />
                        </div>
                    )
                })
            }
            <button className={`${styles.carrousel_btn} ${styles.carrousel_next}`} onClick={nextImage} >
                <BiChevronRight className={styles.carrousel_icon}/>
            </button>
            <button className={`${styles.carrousel_btn}`} onClick={prevImage} >
                <BiChevronLeft className={styles.carrousel_icon}/>
            </button>
        </div>
    )
}

export default Carrousel