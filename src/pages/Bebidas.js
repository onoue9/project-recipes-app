import React, { useEffect, useContext } from 'react';
import DrinksCart from '../components/DrinksCart';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Context from '../context/Context';

export default function Bebidas() {
  const { setMealOrDrink } = useContext(Context);

  useEffect(() => {
    const drink = 'thecocktaildb';
    setMealOrDrink(drink);
  }, [setMealOrDrink]);

  return (
    <div>
      <Header title="Bebidas" />
      <DrinksCart />
      <Footer />
    </div>
  );
}
