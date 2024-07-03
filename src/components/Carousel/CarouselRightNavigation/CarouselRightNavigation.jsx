import React, { useState, useEffect } from "react";
import styles from './CarouselRightNavigation.module.css';
import RightArrow from "../../../assets/right_arrow.png";


function CarouselRightNavigation({ onClick }) {

    return (
        <div className={styles.rightNavigation} onClick={onClick}>
            <img src={RightArrow} className={styles.img}/>
        </div>
    )
}

export default CarouselRightNavigation;