import PropTypes from 'prop-types';
import React from 'react';

export default function Button({ testid, labelText, disabled, onClick, key }) {
  return (
    <div key={ key }>
      <button
        type="button"
        disabled={ disabled }
        onClick={ onClick }
        data-testid={ testid }
      >
        { labelText }
      </button>
    </div>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  labelText: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  key: PropTypes.string.isRequired,
};
