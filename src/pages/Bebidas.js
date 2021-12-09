import React, { useEffect, useContext } from 'react';
import DrinksCart from '../components/DrinksCart';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Context from '../context/Context';

export default function Bebidas() {
  const { setMealOrDrink, fetchAPI } = useContext(Context);
  const drink = 'thecocktaildb';
  const filter = 'search.php?s=';

  useEffect(() => {
    setMealOrDrink(drink);
    fetchAPI(filter, drink);
  }, []);

  return (
    <div>
      <Header title="Bebidas" />
      <DrinksCart />
      <Footer />
    </div>
  );
}
