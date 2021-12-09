import React, { useEffect, useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MealsCart from '../components/MealsCart';
import Context from '../context/Context';

export default function Comidas() {
  const { setMealOrDrink } = useContext(Context);

  useEffect(() => {
    const meal = 'themealdb';
    setMealOrDrink(meal);
  }, [setMealOrDrink]);

  return (
    <div>
      <Header title="Comidas" />
      <MealsCart />
      <Footer />
    </div>
  );
}
