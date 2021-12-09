import React, { useEffect, useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MealsCart from '../components/MealsCart';
import Context from '../context/Context';

export default function Comidas() {
  const { setMealOrDrink, fetchAPI } = useContext(Context);
  const meal = 'themealdb';
  const filter = 'search.php?s=';

  useEffect(() => {
    setMealOrDrink(meal);
    fetchAPI(filter, meal);
  }, []);

  return (
    <div>
      <Header title="Comidas" />
      <MealsCart />
      <Footer />
    </div>
  );
}
