import styles from "./thumb.module.css"
import {Link} from "react-router-dom";

function Thumb({item}) {
    const {id, title, cover} = item;

    return (
        <Link to={`/logement/${id}`} className={styles.container} style={{backgroundImage: `linear-gradient(var(--clr-primary-50) 100%, rgba(255, 255, 0, 0.5) 100%) , url(${cover})`}} >
            <div className={styles.backdrop} >
                <h2 className={styles.title}>{title}</h2>
            </div>
        </Link>
    );
}

export default Thumb;