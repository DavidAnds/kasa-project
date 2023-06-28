import styles from "./navbar.module.css";
import logo from'./logo.png';
import {Link} from "react-router-dom";

function Navbar() {

    return (
        <div className={styles.container} >
            <div className={styles.logo_container}>
                <img src={logo} alt="logo" className={styles.logo} />
            </div>
            <nav className={styles.nav}>
                <Link to="/" className={styles.link}>Accueil</Link>
                <Link to="/about" className={styles.link}>A propos</Link>
            </nav>
        </div>
    );
}

export default Navbar;