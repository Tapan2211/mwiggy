import React, { useEffect, useState } from "react";
import styles from './CountryFood.module.css';
import { fetchFoodTypesList } from '../Api/Api'
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeadingCompo from '../Heading/HeadingCompo';

function CountryFood() {

    const [countryFoodType, setCountryFoodType] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCountryFoodList = async () => {
            try {
                const data = await fetchFoodTypesList();
                setCountryFoodType(data);
                setIsLoading(false);
            } catch (error) {
                console.log("Error fetching food type", error);
                setIsLoading(false);
            }
        }
        fetchCountryFoodList()
    })

    const clickHandle = (country) => {
        navigate(`/Foodlist/${country}`);
    }

    return (
        <div>
            {
                isLoading ? (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                        <CircularProgress style={{ color: 'orange' }} />
                    </div>
                ) : (
                    <div>
                        <div>
                            <HeadingCompo heading="Best Cuisines by Countries" />
                        </div>
                        <div className={styles.main_div}>

                            {
                                countryFoodType.map((foodType) => (
                                    <div onClick={() => clickHandle(foodType.strArea)}>
                                        <p className={styles.div_text}>{foodType.strArea}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CountryFood;