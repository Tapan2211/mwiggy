import React from "react";
import styles from './Categories.module.css';
import { Tooltip } from "@mui/material";
import HeadingCompo from "../Heading/HeadingCompo";
import { fetchCategoriesByName } from '../Api/Api';
import { useNavigate } from 'react-router-dom';
import Break from "../Break/Break";


function Categories({ send, type }) {
    const navigate = useNavigate();
    
    const clickHandleCategory = (categoryName) => {
        navigate(`/Foodlist/${categoryName}`);
    }

    const getFoodType = (type) => {
        switch(type){
            case "meal": {
                return(
                    <div className={styles.card_list} >
                    {
                        send.map((categorey) => (
                            <Tooltip title={categorey.strMeal}>
                                <div className={styles.card} key={categorey.idMeal} onClick={() => clickHandleCategory(categorey.strCategory)}>
                                    <img src={categorey.strMealThumb} alt={categorey.strCategory} className={styles.card_img} />
                                    <p className={styles.textWrapper}>{categorey.strMeal}</p>
                                </div>
                            </Tooltip>
                        ))
                    }
                </div>
                )
            }

            case 'category': {
                return (

                    <div className={styles.container}>
            
                        <div>
                            <div>
                                <HeadingCompo heading="Categorey by Food" />
                            </div>
                            <div className={styles.card_list} >
                                {
                                    send.map((categorey) => (
                                        <Tooltip title={categorey.strCategory}>
                                            <div className={styles.card} key={categorey.idCategory} onClick={() => clickHandleCategory(categorey.strCategory)}>
                                                <img src={categorey.strCategoryThumb} alt={categorey.strCategory} className={styles.card_img} />
                                                <p className={styles.textWrapper}>{categorey.strCategory}</p>
                                            </div>
                                        </Tooltip>
                                    ))
                                }
                            </div>

                            <Break/>
                        </div>
                    </div>
                )
            }

            default:
                return <></>
        }
    }
    return getFoodType(type); 
   
}

export default Categories;