import styles from "./dropdown.module.css"
import { useState } from "react"
import { BiChevronDown } from "react-icons/bi"

function Dropdown({ title, content, size = "medium" }) {
    const [open, setOpen] = useState(false)

    const toggleDropdown = () => {
        setOpen(!open)
    }

    return (
        <div className={`${styles.dropdown} ${styles["dropdown_" + size]}`}>
            <button className={styles.btn} onClick={toggleDropdown}>
                <h2 className={styles.title}>{title}</h2>
                <BiChevronDown
                    className={`${styles.icon} ${
                        open ? styles.icon_open : styles.icon_close
                    }`}
                />
            </button>
            <div
                className={`${styles.content} ${
                    open ? styles.content_open : styles.content_close
                }`}>
                {typeof content === "string" ? (
                    <p className={styles.content_text}>{content}</p>
                ) : (
                    <ul className={styles.content_list}>
                        {content.map((item, index) => {
                            return (
                                <li key={index} className={styles.content_text}>
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Dropdown
