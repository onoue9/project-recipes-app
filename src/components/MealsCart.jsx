import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';

export default function MealsCart() {
  const { apiResult } = useContext(Context);
  const listLimit = 11;
  return (
    <div className="deckSection">
      { apiResult.length >= 1
        && (apiResult.map((meal, index) => (
          index <= listLimit
              && (
                <Link
                  to={ `/comidas/${meal.idMeal}` }
                >
                  <div
                    data-testid={ `${index}-recipe-card` }
                    key={ meal.idMeal }
                    className="recipeCard"
                  >
                    <img
                      src={ meal.strMealThumb }
                      alt={ meal.strMeal }
                      data-testid={ `${index}-card-img` }
                    />
                    <p data-testid={ `${index}-card-name` }>{meal.strMeal}</p>
                  </div>
                </Link>
              )
        ))
        )}
    </div>
  );
}
