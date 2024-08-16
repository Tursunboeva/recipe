import React from 'react';
import useFetchRecipes from '../hooks/useFetchRecipes';
import { Link } from 'react-router-dom';
import '../components/Recipes.css'; 

const Recipes = () => {
    const { recipes, loading, error } = useFetchRecipes();

    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">Error: {error.message}</p>;

    return (
        <div className="recipes-container">
            {recipes.map(recipe => (
                <div key={recipe.id} className="recipe-card">
                    <img src={recipe.image} alt={recipe.name} className="recipe-image" />
                    <div className="recipe-info">
                        <h3 className="recipe-title">{recipe.name}</h3>
                        <p className="recipe-rating">Rating: {recipe.rating}</p>
                        <Link to={`/recipes/${recipe.id}`} className="recipe-link">
                        See the recipe</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Recipes;
