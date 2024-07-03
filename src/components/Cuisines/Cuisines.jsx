import React, { useEffect, useState } from "react";
import styles from './Cuisines.module.css';
import { fetchCuisinesList } from '../Api/Api';
import { CircularProgress } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import HeadingCompo from "../Heading/HeadingCompo";
import Break from "../Break/Break";

function Cuisines({foodTypes}) {

    const navigate = useNavigate();
    
    const [cuisines, setCuisines] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCuisine = async () => {
            try {
                const data = await fetchCuisinesList();
                setCuisines(data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.log("Fetch error cuisines", error)
            }
        }

        fetchCuisine();
    }, [])

    const clickMeals = (meal) => {
        navigate(`/Foodlist/${meal}`);
    }

    return (
        <div>
            <div>
                <HeadingCompo heading="Best Cuisines" />
            </div>
            <div className={styles.main_div}>

                {
                        foodTypes.map((cuisine) => (
                            <div onClick={() => clickMeals(cuisine.strCategory)}>
                                <p className={styles.div_text}>{cuisine.strCategory}</p>
                            </div>
                        ))
                }
            </div>
            <Break />
        </div>
    )
}

export default Cuisines;