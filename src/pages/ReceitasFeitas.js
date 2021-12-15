import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import DoneCard from '../components/DoneCard';

export default function ReceitasFeitas() {
  const [allDoneRecipes, setAllDoneRecipes] = useState([]);
  const [foosDoneRecipes, setFoodDoneRecipes] = useState([]);
  const [drinksDoneRecipes, setDrinksDoneRecipes] = useState([]);
  const [renderState, setRenderState] = useState('all');

  const getRecipesFromStorage = () => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const foodRecipes = doneRecipes.filter((recipe) => recipe.type === 'comida');
    const drinksRecipes = doneRecipes.filter((recipe) => recipe.type === 'bebida');
    setAllDoneRecipes(doneRecipes);
    setFoodDoneRecipes(foodRecipes);
    setDrinksDoneRecipes(drinksRecipes);
  };

  const recipeCard = (recipeData) => recipeData.map((recipe, index) => (
    <div key={ recipe.name }>
      <DoneCard
        dataRecipe={ recipe }
        index={ index }
      />
    </div>));

  const renderRecipes = () => {
    switch (renderState) {
    case 'all':
      return (
        recipeCard(allDoneRecipes)
      );

    case 'comida':
      return (
        recipeCard(foosDoneRecipes)
      );

    case 'bebida':
      return (
        recipeCard(drinksDoneRecipes)
      );

    default:
      break;
    }
  };

  useEffect(() => {
    getRecipesFromStorage();
  }, []);

  return (
    <div>
      <Header title="Receitas Feitas" disabled />
      <div>
        <Button
          labelText="All"
          testid="filter-by-all-btn"
          disabled={ false }
          onClick={ () => { setRenderState('all'); } }
          key="filter-by-all-btn"
        />
        <Button
          labelText="Food"
          testid="filter-by-food-btn"
          disabled={ false }
          onClick={ () => { setRenderState('comida'); } }
          key="filter-by-food-btn"
        />
        <Button
          labelText="Drinks"
          testid="filter-by-drink-btn"
          disabled={ false }
          onClick={ () => { setRenderState('bebida'); } }
          key="filter-by-drink-btn"
        />
        <div />
        <div>
          { renderRecipes() }
        </div>
      </div>
    </div>
  );
}
