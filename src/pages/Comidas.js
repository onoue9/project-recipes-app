import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MealsCart from '../components/MealsCart';
import Context from '../context/Context';
import CategoryFilter from '../components/CategoryFilter';

export default function Comidas() {
  const { setMealOrDrink, fetchAPI, fetchCategoryAPI,
    setCategorySelected,
  } = useContext(Context);
  const { state } = useLocation();
  const meal = 'themealdb';
  const filter = !state ? 'search.php?s=' : state.filter;
  const value = !state ? '' : state.value;

  useEffect(() => {
    setMealOrDrink(meal);
    fetchAPI(filter, meal, value);
    fetchCategoryAPI(meal);
    setCategorySelected('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header title="Comidas" />
      <CategoryFilter />
      <MealsCart />
      <Footer />
    </div>
  );
}
