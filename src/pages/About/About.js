import styles from "./About.module.css"
import Dropdown from "../../components/dropdown/dropdown"

function About() {
    return (
        <div className={styles.container}>
            <div className={styles.title_container}>
                <div className={styles.title_backdrop}></div>
            </div>
            <div className={styles.content}>
                <Dropdown
                    title="Fiabilité"
                    content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                />
                <Dropdown
                    title="Respect"
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
                <Dropdown
                    title="Service"
                    content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                />
                <Dropdown
                    title="Sécurité"
                    content="La sécurité est la priorité de Kasa. C'est pourquoi nous assurons un paiement entièrement sécurisé pour chaque réservation effectuée."
                />
            </div>
        </div>
    )
}

export default About
