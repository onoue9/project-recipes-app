import React from 'react';
import { useHistory } from 'react-router';
// import Context from '../context/Context';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Footer() {
  // const { fetchAPI } = useContext(Context);
  const history = useHistory();

  const handleDrinkClick = () => {
    // const filter = 'search.php?s=';
    // const adressDrink = 'thecocktaildb';
    // fetchAPI(filter, adressDrink);
    history.push('/bebidas');
  };

  const handleMealClick = () => {
    // const filter = 'search.php?s=';
    // const adressMeal = 'themealdb';
    // fetchAPI(filter, adressMeal);
    history.push('/comidas');
  };

  const handleExploreClick = () => {
    history.push('/explorar');
  };

  return (
    <footer data-testid="footer">
      <button onClick={ handleDrinkClick } type="button">
        <img
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="icone de bebidas"
        />
      </button>
      <button onClick={ handleExploreClick } type="button">
        <img
          data-testid="explore-bottom-btn"
          src={ exploreIcon }
          alt="icone de explorar"
        />
      </button>
      <button onClick={ handleMealClick } type="button">
        <img
          data-testid="food-bottom-btn"
          src={ mealIcon }
          alt="icone de comidas"
        />
      </button>
    </footer>
  );
}
