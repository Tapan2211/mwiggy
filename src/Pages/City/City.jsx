import React, { useEffect, useState } from "react";
import styles from './City.module.css';
import { fetchCities } from '../../components/Api/Api';

import Navbar from '../../components/Navbar/Navbar';
import CityCard from '../../components/CityCard/CityCard';
import Footer from '../../components/Footer/Footer';
import { Box, CircularProgress, Grid } from "@mui/material";

function City() {

    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCitiesList = async () => {
            try {
                const data = await fetchCities();
                setCities(data);
                console.log("LIST_CITY", data)
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.log("Fetching error cities", error);
            }
        };
        fetchCitiesList();
    }, []);

    return (
        <div >
            <Navbar />
            <div className={styles.sub_div}>
                {isLoading ? (
                    <Box className={styles.loading}>
                        <CircularProgress style={{ color: 'orange' }} />
                    </Box>
                ) : (
                    cities && cities.map((city) => (
                        <Box key={city.id}>
                            <CityCard cities={city} />
                        </Box>
                    ))
                )}
            </div>
            <Footer />
        </div>
    )
}

export default City;