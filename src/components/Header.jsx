import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import profile from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';
import Input from './Input';

export default function Header({ title, disabled = false }) {
  const [enableInput, setEnableInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const handleProfileClick = () => {
    history.push('/perfil');
  };

  const handleSearchClick = () => {
    setEnableInput(!enableInput);
  };

  const handleChangeSearch = ({ target }) => {
    setInputValue(target.value);
  };

  return (
    <div>
      <button onClick={ handleProfileClick } type="button">
        <img
          data-testid="profile-top-btn"
          src={ profile }
          alt="foto de perfil"
        />
      </button>
      <h2 data-testid="page-title">{ title }</h2>
      { !disabled
      && (
        <div>
          <button onClick={ handleSearchClick } type="button">
            <img
              data-testid="search-top-btn"
              src={ search }
              alt="icone de busca"
            />
          </button>
          { enableInput
          && (
            <Input
              testid="search-input"
              type="text"
              placeholder="Buscar"
              onChange={ handleChangeSearch }
              value={ inputValue }
            />
          )}
        </div>
      )}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
