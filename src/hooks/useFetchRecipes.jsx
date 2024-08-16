import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/recipes'); 
                setRecipes(response.data.recipes || response.data); 
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    return { recipes, loading, error };
};

export default useFetchRecipes;
