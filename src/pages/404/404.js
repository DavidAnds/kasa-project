import styles from "./404.module.css";
import Navbar from "../../components/navbar/navbar";
import { Link } from "react-router-dom";

function Error404() {
    return (
        <div className={styles.container}>
            <Navbar/>
            <div className={styles.content}>
                <h1 className={styles.title}>404</h1>
                <p className={styles.text}>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className={styles.link}>Retourner sur la page d’accueil</Link>
            </div>
        </div>
    );
}

export default Error404;