import React, { useEffect, useContext } from 'react';
import DrinksCart from '../components/DrinksCart';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Context from '../context/Context';
import CategoryFilter from '../components/CategoryFilter';

export default function Bebidas() {
  const { setMealOrDrink, fetchAPI, fetchCategoryAPI,
    setCategorySelected,
  } = useContext(Context);
  const drink = 'thecocktaildb';
  const filter = 'search.php?s=';

  useEffect(() => {
    setMealOrDrink(drink);
    fetchAPI(filter, drink);
    fetchCategoryAPI(drink);
    setCategorySelected('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header title="Bebidas" />
      <CategoryFilter />
      <DrinksCart />
      <Footer />
    </div>
  );
}
