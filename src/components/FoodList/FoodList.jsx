import React, { useEffect, useState } from "react";
import styles from './FoodList.module.css';
import { useParams } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { BACKEND_ENDPOINT } from '../Api/Api'
import Categories from "../Categories/Categories";
import NoRecord from '../../assets/no_data.png';
import Footer from '../Footer/Footer';

function FoodList() {
    const { categoryName } = useParams();

    const [foodList, setFoodList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchFoodList = async () => {
            try {
                const response = await axios.get(`${BACKEND_ENDPOINT}/filter.php?c=${categoryName}`)
                const data = response.data.meals;
                setFoodList(data);
                setIsLoading(false);
                window.scrollTo(0,0)
            } catch (error) {
                console.log("Error fetching categories", error)
                setIsLoading(false);
            }
        }

        fetchFoodList()
    }, [])

    return (
        <div>
            <Navbar />
            <div>

                {
                    isLoading ? (
                        <div className={styles.loaderContainer}>
                            <CircularProgress style={{ color: 'orange' }} />
                        </div>
                    ) : (
                        foodList !== null ? (<Categories send={foodList} type="meal" />) : (
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '88vh', backgroundColor: 'orange' }}>
                                {/* <h3 style={{ textAlign: 'center' }}>
                                No Record Found
                            </h3> */}
                                <img src={NoRecord} alt="No Record Found" />
                            </div>
                        )
                    )
                }
            </div>
            <Footer/>
        </div>

    )
}

export default FoodList;