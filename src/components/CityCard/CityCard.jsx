import React from "react";
import styles from './CityCard.module.css';
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import IMAGE from '../../assets/swiggy.jpg'

function CityCard({ cities }) {
    const { image, city, description } = cities;

    return (
        <Card sx={{ maxWidth: 345 }} className={styles.main}>
            <CardMedia
                sx={{ height: 340, width: 300 }}
                image={image}
                title={city}
            >
                <CardContent className={styles.cardContent}>
                    <Typography variant="h5" component="div" color="white">
                        {city}
                    </Typography>
                    <Typography variant="body2" color="white">
                        {description}
                    </Typography>
                </CardContent>
            </CardMedia>
        </Card>
    );
}

export default CityCard;
