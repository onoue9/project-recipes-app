import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import favoriteIcon from '../images/whiteHeartIcon.svg';
import Button from '../components/Button';

export default function ReceitaComida(props) {
  const { match: { params: { id } } } = props;
  const [meal, setMeal] = useState({});
  const [recomendation, setRecomendation] = useState([]);
  const fetchRecipe = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const result = await response.json();
    setMeal(result.meals[0]);
  };

  const fetchRecomendation = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const result = await response.json();
    setRecomendation(result.drinks);
  };

  useEffect(() => {
    fetchRecipe();
    fetchRecomendation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderIngredients = () => {
    const ingredients = Object.entries(meal).filter((element) => (
      element[0].includes('strIngredient') && element[1]));
    const measures = Object.entries(meal).filter((element) => (
      element[0].includes('strMeasure') && element[1]));
    return (ingredients.map((element, index) => (
      <li key={ element[0] } data-testid={ `${index}-ingredient-name-and-measure` }>
        {`${element[1]} - ${measures[index][1]}`}
      </li>)));
  };

  const listLimit = 6;
  return (
    <section>
      <div>
        <img src={ meal.strMealThumb } data-testid="recipe-photo" alt={ meal.strMeal } />
      </div>
      <div>
        <div>
          <h2 data-testid="recipe-title">{meal.strMeal}</h2>
          <button onClick={ () => {} } type="button">
            <img
              data-testid="share-btn"
              src={ shareIcon }
              alt="icone para compatilhr"
            />
          </button>
          <button onClick={ () => {} } type="button">
            <img
              data-testid="favorite-btn"
              src={ favoriteIcon }
              alt="icone para favoritar"
            />
          </button>
        </div>

        <p data-testid="recipe-category">{meal.strCategory}</p>
      </div>
      <div>
        <h3>Ingredients</h3>
        <ul>
          {renderIngredients()}
        </ul>
      </div>
      <div>
        <h3>Instructions</h3>
        <p data-testid="instructions">{meal.strInstructions}</p>
      </div>
      <div>
        <h3>Video</h3>
        <iframe title={ meal.strMeal } data-testid="video" src={ meal.strYoutube } />
      </div>
      <div>
        <h3>Recomended</h3>
        {recomendation.map((element, index) => (
          index < listLimit
          && (
            <Link
              key={ element.idDrink }
              to={ `/bebidas/${element.idDrink}` }
            >
              <div
                data-testid={ `${index}-recomendation-card` }
                id={ `recomendationIndex${index}` }
              >
                <img src={ element.strDrinkThumb } alt={ element.strDrink } />
                <p>{element.strAlcoholic}</p>
                <h3 data-testid={ `${index}-recomendation-title` }>{element.strDrink}</h3>
              </div>
            </Link>)))}
      </div>
      <div className="buttonFixed">
        <Button
          testid="start-recipe-btn"
          onclick={ () => {} }
          labelText="Iniciar Receita"
        />
      </div>

    </section>
  );
}
