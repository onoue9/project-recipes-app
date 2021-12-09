import React, { useContext } from 'react';
import Context from '../context/Context';

export default function MealsCart() {
  const { apiResult } = useContext(Context);
  const listLimit = 11;
  return (
    <div>
      { apiResult.length > 1
        && (apiResult.map((meal, index) => (
          index <= listLimit
              && (
                <div data-testid={ `${index}-recipe-card` } key={ meal.idMeal }>
                  <img
                    src={ meal.strMealThumb }
                    alt={ meal.strMeal }
                    data-testid={ `${index}-card-img` }
                  />
                  <p data-testid={ `${index}-card-name` }>{meal.strMeal}</p>
                </div>
              )
        ))
        )}
    </div>
  );
}
