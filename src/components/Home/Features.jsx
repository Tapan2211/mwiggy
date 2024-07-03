import React, { useEffect, useState } from "react";
import styles from './Features.module.css';
import Navbar from "../Navbar/Navbar";
import { Box, Stack, Card, CardActionArea, CardMedia, CardContent, Typography, CircularProgress, Grid } from "@mui/material";
import { fetchCities } from '../Api/Api';
import Footer from '../Footer/Footer';

function Features({ data }) {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCitiesList = async () => {
            try {
                const data = await fetchCities();
                setCities(data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.log("Fetching error cities", error);
            }
        };
        fetchCitiesList();
    }, []);

    return (
        <div>
            <Navbar />
           
            <Grid container spacing={1}>
                {isLoading ? (
                    <Box className={styles.loading}>
                        <CircularProgress style={{ color: 'orange' }} />
                    </Box>
                ) : cities.length ? (
                    cities && cities.map((city) => (

                        <Grid item xs={6} md={3} key={city._id} className={styles.main_div}>
                            <Stack m={1} >
                                <Card sx={{ maxWidth: 340 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            image={city.image}
                                            alt={city.city}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {city.city}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {city.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Stack>
                        </Grid>
                        
                    ))
                
                ) : (
                    <Box >
                    <h4>No Products Found.</h4>
                  </Box>
                )
                }
            </Grid>

            <Footer/>
        </div>
    );
}

export default Features;
