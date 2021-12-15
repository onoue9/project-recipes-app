import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from '../components/Button';

export default function ExplorarBebidas() {
  const history = useHistory();

  const fetchRandonRecipe = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const result = await response.json();
    history.push(`/bebidas/${result.drinks[0].idDrink}`);
  };

  return (
    <div>
      <Header title="Explorar Bebidas" disabled />
      <Button
        disabled={ false }
        testid="explore-by-ingredient"
        labelText="Por Ingredientes"
        onClick={ () => { history.push('/explorar/bebidas/ingredientes'); } }
      />
      <Button
        disabled={ false }
        testid="explore-surprise"
        labelText="Me Surpreenda!"
        onClick={ fetchRandonRecipe }
      />
      <Footer />
    </div>
  );
}
