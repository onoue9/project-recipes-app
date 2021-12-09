import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import Context from '../context/Context';

function UserProvider({ children }) {
  const [apiResult, setApiResult] = useState([]);
  const [mealOrDrink, setMealOrDrink] = useState('themealdb');
  const history = useHistory();

  const recipesDetail = (recipes, id) => {
    const { location: { pathname } } = history;
    if (recipes.length === 1) {
      history.push(`${pathname}/${id}`);
    }
  };

  async function fetchAPI(filter, adressParameter = 'themealdb', value = '') {
    const response = await fetch(`https://www.${adressParameter}.com/api/json/v1/1/${filter}${value}`);
    const result = await response.json();
    console.log('fetch');
    if (result.meals && adressParameter === 'themealdb') {
      const mealsList = result.meals;
      setApiResult(mealsList);
      recipesDetail(mealsList, mealsList[0].idMeal);
    } else if (result.drinks && adressParameter === 'thecocktaildb') {
      const drinksList = result.drinks;
      setApiResult(drinksList);
      recipesDetail(drinksList, drinksList[0].idDrink);
    } else {
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  }

  const ContextObj = {
    apiResult,
    setApiResult,
    fetchAPI,
    setMealOrDrink,
    mealOrDrink,
  };

  return (
    <Context.Provider value={ ContextObj }>
      {children}
    </Context.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default UserProvider;
