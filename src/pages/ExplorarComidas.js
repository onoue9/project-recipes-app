import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from '../components/Button';

export default function ExplorarComidas() {
  const history = useHistory();

  const fetchRandonRecipe = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const result = await response.json();
    history.push(`/comidas/${result.meals[0].idMeal}`);
  };

  return (
    <div>
      <Header title="Explorar Comidas" disabled />
      <Button
        disabled={ false }
        testid="explore-by-ingredient"
        labelText="Por Ingredientes"
        onClick={ () => { history.push('/explorar/comidas/ingredientes'); } }
      />
      <Button
        disabled={ false }
        testid="explore-by-area"
        labelText="Por Local de Origem"
        onClick={ () => { history.push('/explorar/comidas/area'); } }
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
