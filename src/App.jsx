import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Recipes from './components/Recipes';
import SingleRecipe from './components/SingleRecipe';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Recipes />} />
      <Route path="/recipes/:id" element={<SingleRecipe />} />
    </Routes>
  );
}

export default App;
