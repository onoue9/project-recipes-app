import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import Button from './Button';

export default function CategoryFilter() {
  const { apiCategoryResult, setCategorySelected,
    mealOrDrink, fetchAPI } = useContext(Context);
  const listLimit = 5;
  const [toggle, setToggle] = useState('');

  const handleCategoryButton = ({ target }) => {
    let filterParameter = 'filter.php?c=';
    const htmlText = target.innerHTML;
    if (toggle !== htmlText) {
      setCategorySelected(htmlText);
      fetchAPI(filterParameter, mealOrDrink, htmlText);
    } else {
      filterParameter = 'search.php?s=';
      fetchAPI(filterParameter, mealOrDrink);
    }
    setToggle(htmlText);
  };

  const handleButtonAll = () => {
    const filterParameter = 'search.php?s=';
    fetchAPI(filterParameter, mealOrDrink);
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
      <Button
        labelText="All"
        onClick={ handleButtonAll }
        testid="All-category-filter"
      />
    </div>
  );
}
