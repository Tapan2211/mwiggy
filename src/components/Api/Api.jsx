import axios from "axios";

export const BACKEND_ENDPOINT = "https://www.themealdb.com/api/json/v1/1";
export const CITY_ENDPOINT = "https://qtrip-dynamic-gvnq.onrender.com/cities";
export const AUTH_ENDPOINT = "https://qkart-frontend-web.onrender.com/api/v1";

export const fetchFoodCategories = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/categories.php`);
        return response.data.categories;
    } catch (error) {
        console.log(error)
    }
}

export const fetchCategoriesByName = async (categoryName) =>{
    
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/filter.php?c=${categoryName}`)
        return response.data.meals;
    } catch (error) {
        console.log(error)
    }
}

export const fetchCuisinesList =  async () =>{
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/list.php?c=list`);
        return response.data.meals;
    } catch (error) {
        console.log(error)
    }
}

export const fetchFoodTypesList = async () =>{
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/list.php?a=list`);
        return response.data.meals;
    } catch (error) {
        console.log(error)
    }
}

export const authRegistration = async (data) =>{
    try {
        const response = await axios.post(`${AUTH_ENDPOINT}/auth/register`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const authLogin = async (data) =>{
    try {
        const response = await axios.post(`${AUTH_ENDPOINT}/auth/login`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCities = async () =>{
    try {
        const response = await axios.get(`${CITY_ENDPOINT}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}