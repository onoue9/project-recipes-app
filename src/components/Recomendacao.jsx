import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Recomendacao({ recomendation }) {
  const listLimit = 6;
  return (
    recomendation[0].idDrink ? (
      <div>
        <h3>Recomended</h3>
        <div className="recomendedList">
          {recomendation.map((element, index) => (
            index < listLimit
            && (
              <Link
                key={ element.idDrink }
                to={ `/bebidas/${element.idDrink}` }
              >
                <div
                  data-testid={ `${index}-recomendation-card` }
                  className="recomendedCart"
                >
                  <img src={ element.strDrinkThumb } alt={ element.strDrink } />
                  <p>{element.strAlcoholic}</p>
                  <h3
                    data-testid={ `${index}-recomendation-title` }
                  >
                    {element.strDrink}

                  </h3>
                </div>
              </Link>)))}
        </div>
      </div>)
      : (
        <div>
          <h3>Recomended</h3>
          <div className="recomendedList">
            {recomendation.map((element, index) => (
              index < listLimit
              && (
                <Link
                  key={ element.idMeal }
                  to={ `/comidas/${element.idMeal}` }
                >
                  <div
                    data-testid={ `${index}-recomendation-card` }
                    className="recomendedCart"
                  >
                    <img src={ element.strMealThumb } alt={ element.strMeal } />
                    <h3
                      data-testid={ `${index}-recomendation-title` }
                    >
                      {element.strMeal}

                    </h3>
                  </div>
                </Link>)))}
          </div>
        </div>)
  );
}

Recomendacao.propTypes = {
  recomendation: PropTypes.arrayOf(PropTypes.object).isRequired,
};
