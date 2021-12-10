import React, { useContext } from 'react';
import Context from '../context/Context';
import Button from './Button';

export default function CategoryFilter() {
  const { apiCategoryResult, setCategorySelected,
    mealOrDrink, fetchAPI } = useContext(Context);
  const listLimit = 5;
  const filterParameter = 'filter.php?c=';

  const handleCategoryButton = ({ target }) => {
    setCategorySelected(target.innerHTML);
    fetchAPI(filterParameter, mealOrDrink, target.innerHTML);
  };

  return (
    <div>
      { apiCategoryResult.length >= 1
        && apiCategoryResult.map((category, index) => (
          index < listLimit && (
            <Button
              key={ category.strCategory }
              testid={ `${category.strCategory}-category-filter` }
              labelText={ category.strCategory }
              onClick={ handleCategoryButton }
              disabled={ false }
            />
          )
        )) }
    </div>
  );
}
