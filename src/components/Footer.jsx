import React from 'react';
import { useHistory } from 'react-router';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import ImageButton from './ImageButton';

export default function Footer() {
  const history = useHistory();

  const handleDrinkClick = () => {
    history.push('/bebidas');
  };

  const handleMealClick = () => {
    history.push('/comidas');
  };

  const handleExploreClick = () => {
    history.push('/explorar');
  };

  return (
    <footer data-testid="footer">
      <div className="footerBar">
        <ImageButton
          testid="drinks-bottom-btn"
          onClick={ handleDrinkClick }
          imageSrc={ drinkIcon }
          altImage="icone de bebidas"
          className="footerBtn"
        />
        <ImageButton
          testid="explore-bottom-btn"
          onClick={ handleExploreClick }
          imageSrc={ exploreIcon }
          altImage="icone de explorar"
          className="footerBtn"
        />
        <ImageButton
          testid="food-bottom-btn"
          onClick={ handleMealClick }
          imageSrc={ mealIcon }
          altImage="icone de comidas"
          className="footerBtn"
        />
      </div>
    </footer>
  );
}
