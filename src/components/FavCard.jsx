import PropTypes from 'prop-types';
import React, { useState } from 'react';
import copy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import ImageButton from './ImageButton';
import shareIcon from '../images/shareIcon.svg';
import favIcon from '../images/blackHeartIcon.svg';

export default function FavCard(props) {
  const [copiedLink, setCopiedLink] = useState(false);
  const {
    dataRecipe: {
      category, alcoholicOrNot, name, area,
      image, type, id },
    index, onClick } = props;

  const handleShareBtn = () => {
    const saveClipboard = `http://localhost:3000/${type}s/${id}`;
    setCopiedLink(true);
    copy(saveClipboard);
  };

  return (
    <div>
      <Link to={ `/${type}s/${id}` }>
        <img
          src={ image }
          alt={ name }
          data-testid={ `${index}-horizontal-image` }
          className="mainImage"
        />
      </Link>
      <div>
        <div>
          <h3
            data-testid={ `${index}-horizontal-top-text` }
          >
            { type === 'comida' ? `${area} - ${category}` : alcoholicOrNot }
          </h3>
          <Link to={ `/${type}s/${id}` }>
            <h2 data-testid={ `${index}-horizontal-name` }>{ name }</h2>
          </Link>
        </div>
        <ImageButton
          testid={ `${index}-horizontal-share-btn` }
          onClick={ handleShareBtn }
          imageSrc={ shareIcon }
          altImage="icone para compatilhar"
        />
        { copiedLink && <p>Link copiado!</p>}
        <ImageButton
          testid={ `${index}-horizontal-favorite-btn` }
          onClick={ onClick }
          imageSrc={ favIcon }
          altImage="icone para favoritas"
        />
      </div>
    </div>
  );
}

FavCard.propTypes = {
  dataRecipe: PropTypes.shape({
    alcoholicOrNot: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    area: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
