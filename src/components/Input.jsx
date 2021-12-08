import PropTypes from 'prop-types';
import React from 'react';

export default function Input({ testid, placeholder, type, onChange }) {
  return (
    <div>
      <label htmlFor={ testid }>
        <input
          data-testid={ testid }
          id={ testid }
          type={ type }
          // value={ }
          // name={ }
          onChange={ onChange }
          placeholder={ placeholder }
        />
      </label>
    </div>
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
