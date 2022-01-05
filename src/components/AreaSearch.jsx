import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AreaSearch({ areaList }) {
  const [areaSelected, setAreaSelected] = useState('All');
  const [recipesList, setRecipesList] = useState([]);
  const listLimit = 11;

  async function fetchApiFilterArea(value) {
    if (value === 'All') {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const result = await response.json();
      setRecipesList(result.meals);
    } else {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`);
      const result = await response.json();
      setRecipesList(result.meals);
    }
  }

  function defineSelectedArea({ target }) {
    setAreaSelected(target.value);
  }

  useEffect(() => {
    fetchApiFilterArea(areaSelected);
  }, [areaSelected]);

  return (
    <div>
      {console.log(areaSelected, recipesList)}
      <select
        onChange={ defineSelectedArea }
        data-testid="explore-by-area-dropdown"
      >
        <option
          value="All"
          data-testid="All-option"
        >
          All
        </option>
        { areaList.map((area) => (
          <option
            key={ area }
            value={ area }
            data-testid={ `${area}-option` }
          >
            {area}
          </option>
        )) }
      </select>
      <div>
        { recipesList.length > 0
        && (recipesList.map((meal, index) => (
          index <= listLimit
              && (
                <Link
                  to={ `/comidas/${meal.idMeal}` }
                >
                  <div data-testid={ `${index}-recipe-card` } key={ meal.idMeal }>
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
    </div>
  );
}

AreaSearch.propTypes = {
  areaList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
