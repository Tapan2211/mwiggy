import React, { useEffect, useState } from "react";
import styles from './Pricing.module.css';
import Navbar from "../Navbar/Navbar";
import { fetchCuisinesList } from '../Api/Api';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, CircularProgress, Tooltip } from "@mui/material";
import { BACKEND_ENDPOINT } from '../Api/Api'
import axios from "axios";
import Footer from "../Footer/Footer";

function Pricing() {
    const [isLoading, setIsLoading] = useState([]);
    const [cuisines, setCuisines] = useState([]);
    const [foodList, setFoodList] = useState([]);
    const [selectedIdx, setSelectedIdx] = useState(0); // Initialize with 0 for default selection

    useEffect(() => {
        const fetchCuisines = async () => {
            try {
                const data = await fetchCuisinesList();
                setCuisines(data);
                setIsLoading(false);

            } catch (error) {
                toast.error("Error fetching food type", error)
            }
        }
        fetchCuisines()
    }, [])

    useEffect(() => {
        // Log the selected index data when the page loads
        const foodType = cuisines[selectedIdx]?.strCategory;
        const fetchFoodList = async () => {
            try {
                const response = await axios.get(`${BACKEND_ENDPOINT}/filter.php?c=${foodType}`)
                const data = response.data.meals;
                setFoodList(data);
                setIsLoading(false);
            } catch (error) {
                toast.error("Error fetching categories", error)
                setIsLoading(false);
            }
        }

        fetchFoodList()
    }, [selectedIdx, cuisines])

    const clickHandle = (index, meal) => {
        setSelectedIdx(index);
        console.log(meal)
        const fetchFoodList = async () => {
            try {
                const response = await axios.get(`${BACKEND_ENDPOINT}/filter.php?c=${meal}`)
                const data = response.data.meals;
                setFoodList(data);
                setIsLoading(false);
            } catch (error) {
                toast.error("Error fetching categories", error)
                setIsLoading(false);
            }
        }

        fetchFoodList()
    }

    return (
        <div>
            <Navbar />
            <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='start' alignItems='center'>
                {isLoading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                        <CircularProgress style={{ color: "orange" }} />
                    </Box>
                ) : cuisines.length ? (
                    cuisines.map((items, index) => (
                        <div
                            key={items.strCategory}
                            className={`${styles.main} ${selectedIdx === index ? styles.selectedItem : ''}`}
                            onClick={() => clickHandle(index, items.strCategory)} // Pass the index to clickHandle
                        >
                            <p className={styles.font}>{items.strCategory}</p>
                        </div>
                    ))
                ) : (
                    <Box>
                        <h3>Record no found</h3>
                    </Box>
                )}
            </Box>

            <div className={styles.card_list} >
                {foodList && foodList.length > 0 ? (
                    foodList.map((items) => (
                        <Tooltip title={items.strMeal} key={items.idCategory}>
                            <div className={styles.card} >
                                <img src={items.strMealThumb} alt={items.strMeal} className={styles.card_img} />
                                <p className={styles.textWrapper}>{items.strMeal}</p>
                            </div>
                        </Tooltip>
                    ))
                ) : (
                    <p style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}>No food items found</p>
                )}
            </div>
            <Footer/>
            <ToastContainer />
        </div>
    )
}

export default Pricing;
