import { useEffect, useState } from "react"
import Carrousel from "../../components/carrousel/carrousel"
import Dropdown from "../../components/dropdown/dropdown"
import Rating from "../../components/rating/rating"
import data from "../../data/data.json"
import { useParams, useNavigate } from "react-router"
import styles from "./Housing.module.css"

function Housing() {
    const { id } = useParams()
    const [itemData, setItemData] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        const selectedItem = data.find((element) => element.id === id)
        console.log(selectedItem)

        if (!selectedItem) {
            navigate("/404")
        } else {
            setItemData(selectedItem)
        }
    }, [id])

    return (
        <div className={styles.container}>
            {itemData && (
                <>
                    <div className={styles.carrousel}>
                        <Carrousel images={itemData.pictures} />
                    </div>
                    <div className={styles.texts}>
                        <h1 className={styles.title}>{itemData.title}</h1>
                        <p className={styles.location}>{itemData.location}</p>
                        <div className={styles.tags}>
                            {itemData.tags.map((tag) => (
                                <p className={styles.tag}>{tag}</p>
                            ))}
                        </div>
                    </div>
                    <div className={styles.other}>
                        <div className={styles.rating}>
                            <Rating rating={itemData.rating} />
                        </div>
                        <div className={styles.host}>
                            <p className={styles.host_name}>
                                {itemData.host.name}
                            </p>
                            <img
                                className={styles.host_picture}
                                src={itemData.host.picture}
                                alt="host"
                            />
                        </div>
                    </div>
                    <div className={styles.description}>
                        <Dropdown
                            title="Description"
                            content={itemData.description}
                            size="small"
                        />
                    </div>
                    <div className={styles.equipments}>
                        <Dropdown
                            title="Equipements"
                            content={itemData.equipments}
                            size="small"
                        />
                    </div>
                </>
            )}
        </div>
    )
}

export default Housing
