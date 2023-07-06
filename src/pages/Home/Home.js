import Thumb from "../../components/thumb/thumb";
import data from "../../data/data.json"
import styles from "./Home.module.css"

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.title_container}>
                <div className={styles.title_backdrop}>
                    <h1 className={styles.title}>Chez vous, partout et ailleurs</h1>
                </div>
            </div>
            <div className={styles.content}>
                {data.map((item, index) => (
                    <Thumb key={index} item={item}/>
                ))}
            </div>
        </div>
    );
}

export default Home;