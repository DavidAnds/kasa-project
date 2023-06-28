import styles from "./footer.module.css";
import logo from'./logo-white.png';


function Footer() {

    return (
        <div className={styles.container} >
            <div className={styles.logo_container}>
                <img src={logo} alt={styles.logo} className={styles.logo} />
            </div>
            <p className={styles.copyright}>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer;