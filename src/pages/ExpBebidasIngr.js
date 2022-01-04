import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientsDeck from '../components/IngredientsDeck';

export default function ExpBebidaIngr() {
  const [ingredientsList, setIngredientsList] = useState([]);

  async function fetchApiIngredients() {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    const result = await response.json();
    const ingredientsLimit = 12;
    const filtredIngredients = result.drinks
      .filter((_, i) => i < ingredientsLimit)
      .map((ingredient) => ({ strIngredient: ingredient.strIngredient1 }));
    setIngredientsList(filtredIngredients);
  }

  useEffect(() => {
    fetchApiIngredients();
  }, []);

  return (
    <div>
      <Header title="Explorar Ingredientes" disabled />
      { ingredientsList.length > 0
        && <IngredientsDeck list={ ingredientsList } address="thecocktaildb" />}
      <Footer />
    </div>
  );
}
