import styles from './rating.module.css';
import {FaStar} from "react-icons/fa";

function Rating({rating}) {

    return (
        <div className={styles.rating}>
            {
                [...Array(5)].map((item, index) => (
                    <FaStar
                        key={index}
                        className={`${styles.star} ${index < rating ? styles.star_filled : styles.star_empty}`}
                    />
                ))
            }
        </div>
    );
}

export default Rating;