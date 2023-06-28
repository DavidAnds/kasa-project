import { Outlet} from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import styles from "./Layout.module.css";
import Footer from "../components/footer/footer";

function Layout() {

    return (
        <>
            <div className={styles.container}>
                <Navbar />
                <div className={styles.content} id="details">
                   <Outlet />
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Layout;