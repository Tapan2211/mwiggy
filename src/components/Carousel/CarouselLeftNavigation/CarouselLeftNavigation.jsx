import React, { useState, useEffect } from "react";
import styles from './CarouselLeftNavigation.module.css';
import LeftArrow from "../../../assets/left_arrow.png";
import { useSwiper } from "swiper/react";

function CarouselLeftNavigation({onClick}) {


    return (
        <div className={styles.leftNavigation} onClick={onClick}>
            <img src={LeftArrow} className={styles.img}/>
        </div>
    )
}

export default CarouselLeftNavigation;