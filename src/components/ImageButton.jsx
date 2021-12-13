import PropTypes from 'prop-types';
import React from 'react';

export default function Button({ testid, onClick, imageSrc, altImage }) {
  return (
    <button onClick={ onClick } type="button">
      <img
        data-testid={ testid }
        src={ imageSrc }
        alt={ altImage }
      />
    </button>
  );
}

Button.propTypes = {
  altImage: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  imageSrc: PropTypes.string.isRequired,
};
