import React from "react";
import styles from './Card.module.css'
import ImageLogo from '../../assets/swiggy_3.png'

function Card({ src, title }) {
    return (
        <div className={styles.card}>
            <div>
                <img src={src} alt="image" className={styles.img}/>
                
            </div>
            <p className={styles.text}>{title}</p>
        </div>
    )
}

export default Card;