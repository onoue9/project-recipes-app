import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function IngredientsDeck({ list, address }) {
  return (
    <div>
      { list.map((ingredient, index) => (
        <Link
          to={ address === 'themealdb' ? '/comidas' : '/bebidas' }
          state={ { filter: 'filter.php?i=', value: ingredient.strIngredient } }
          key={ ingredient.strIngredient }
        >
          <div
            data-testid={ `${index}-ingredient-card` }
          >
            <img
              src={ `https://www.${address}.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
              data-testid={ `${index}-card-img` }
              alt={ `imagem de ${ingredient.strIngredient}` }
            />
            <h2
              data-testid={ `${index}-card-name` }
            >
              {ingredient.strIngredient}
            </h2>
          </div>
        </Link>
      )) }
    </div>
  );
}

IngredientsDeck.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  address: PropTypes.string.isRequired,
};
