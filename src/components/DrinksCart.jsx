import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';

export default function DrinksCart() {
  const { apiResult } = useContext(Context);
  const listLimit = 11;
  return (
    <div>
      { apiResult.length >= 1
        && (apiResult.map((drink, index) => (
          index <= listLimit
              && (
                <Link to={ `/bebidas/${drink.idDrink}` }>
                  <div data-testid={ `${index}-recipe-card` } key={ drink.idDrink }>
                    <img
                      src={ drink.strDrinkThumb }
                      alt={ drink.strDrink }
                      data-testid={ `${index}-card-img` }
                    />
                    <p data-testid={ `${index}-card-name` }>{drink.strDrink}</p>
                  </div>

                </Link>
              )
        ))
        )}
    </div>
  );
}
