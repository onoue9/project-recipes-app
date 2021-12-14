import PropTypes from 'prop-types';
import React from 'react';

export default function ListaIngredientesEdit({ ingredientsList, onChange, dataList }) {
  const isChecked = (name) => {
    if (dataList) {
      if (ingredientsList.idMeal) {
        return dataList.meals[ingredientsList.idMeal]
          .some((ingredient) => ingredient === name);
      }
      return dataList.drinks[ingredientsList.idDrink]
        .some((ingredient) => ingredient === name);
    }
    return false;
  };

  const renderIngredients = () => {
    console.log('rodou');
    const ingredients = Object.entries(ingredientsList).filter((element) => (
      element[0].includes('strIngredient') && element[1]));
    const measures = Object.entries(ingredientsList).filter((element) => (
      element[0].includes('strMeasure') && element[1]));
    return (ingredients.map((element, index) => (
      <label
        htmlFor={ element[0] }
        key={ element[0] }
        className={ isChecked(element[1]) ? 'checked' : '' }
      >
        <input
          id={ element[0] }
          data-testid={ `${index}-ingredient-step` }
          type="checkbox"
          checked={ isChecked(element[1]) }
          onChange={ onChange }
          name={ element[1] }
        />
        {`${element[1]} - ${!measures[index] ? 'to taste' : measures[index][1]}`}
      </label>)));
  };

  return (
    <div>
      <h3>Ingredients</h3>
      <div>
        {renderIngredients()}
      </div>
    </div>
  );
}

ListaIngredientesEdit.propTypes = {
  ingredientsList: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  dataList: PropTypes.objectOf(Object).isRequired,
};
