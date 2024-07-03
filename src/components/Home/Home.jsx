import React, { useEffect, useState } from "react";
import styles from './Home.module.css';
import Navbar from "../Navbar/Navbar";
import Carousel from "../Carousel/Carousel";
import Categories from "../Categories/Categories";
import { fetchFoodCategories, fetchFoodTypesList, fetchCuisinesList } from '../Api/Api';
import { CircularProgress } from "@mui/material";
import Cuisines from "../Cuisines/Cuisines";
import Footer from "../Footer/Footer";
import CountryFood from "../CountryFood/CountryFood";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from '../Services/authService';  

function Home() {

    const [categories, setCategoreis] = useState([]);
    const [cuisines, setCuisines] = useState([]);
    const [foodType, setFoodType] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const history = useNavigate();
    useEffect(()=>{
         const isLogin = isAuthenticated();
         if(!isLogin){
            history('/login');
         }
    },[history])

    useEffect(() => {

        const getCategories = async () => {
            try {
                const data = await fetchFoodCategories();
                setCategoreis(data);
                setIsLoading(false);
            } catch (error) {
                console.log("Error fetching categories", error);
                setIsLoading(false);
            }
        }

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

        const getFoodTypeList = async () => {
            try {
                const data = await fetchFoodTypesList();
                setFoodType(data);
                setIsLoading(false)
            } catch (error) {
                console.log("Error fetching food type", error);
                setIsLoading(false);
            }
        }
        window.scrollTo(0,0)
        getCategories()
        fetchCuisine()
        getFoodTypeList()

    }, [])

    return (
        <div>
            <Navbar />
            {/* <Carousel /> */}
            {
                isLoading ? (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <CircularProgress style={{ color: 'orange' }} />
                    </div>
                ) : (
                    categories !== null ? (<Categories send={categories} type="category" />) : (<div>
                        <h3 style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            No Record Found
                        </h3>
                    </div>)
                )
            }

            <Cuisines foodTypes={cuisines} />
            <CountryFood />
            <Footer />
        </div>
    )
}
export default Home