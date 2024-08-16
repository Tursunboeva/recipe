import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchRecipe from '../hooks/useFetchRecipe';
import '../components/SingleRecipe.css'; 

const SingleRecipe = () => {
    const { id } = useParams();
    const { recipe, loading, error } = useFetchRecipe(id);

    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">Error: {error.message}</p>;
    if (!recipe) return <p className="error">Retsept topilmadi.</p>;

    return (
        <div className="single-recipe-container">
            {recipe.image && <img src={recipe.image} alt={recipe.name} className="recipe-image" />}
            <h2 className="single-recipe-title">{recipe.name}</h2>
            <div className="recipe-details">
                <h3 className="recipe-section-header">Composition:</h3>
                <p className="recipe-section-content">{recipe.ingredients}</p>
                <h3 className="recipe-section-header">
                Preparation:</h3>
                <p className="recipe-section-content">{recipe.instructions}</p>
            </div>
        </div>
    );
};

export default SingleRecipe;
