import React from "react";
import LogoImage from '../../assets/swiggy_3.png';
import styles from './Logo.module.css';

export const Logo =()=>{
    return(
        <div className="logo">
                <img src={LogoImage} alt="Logo" className={styles.img_style}/>
            </div>
    )
}