import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import profile from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';
import Input from './Input';
import Button from './Button';
import Context from '../context/Context';

export default function Header({ title, disabled = false }) {
  const [enableInput, setEnableInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [checkedRadio, setCheckedRadio] = useState('');
  const { fetchAPI } = useContext(Context);
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

  const handleChecked = ({ target }) => {
    setCheckedRadio(target.value);
  };

  const handleSearchBtn = () => {
    if (checkedRadio === 'search.php?f=' && inputValue.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    } else {
      fetchAPI(checkedRadio, inputValue);
    }
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
            <div>
              <Input
                testid="search-input"
                type="text"
                placeholder="Buscar"
                onChange={ handleChangeSearch }
                value={ inputValue }
              />
              <div>
                <Input
                  testid="ingredient-search-radio"
                  type="radio"
                  labelText="Ingrediente"
                  value="filter.php?i="
                  name="SearchOption"
                  onChange={ handleChecked }
                />
                <Input
                  testid="name-search-radio"
                  type="radio"
                  labelText="Nome"
                  value="search.php?s="
                  name="SearchOption"
                  onChange={ handleChecked }
                />
                <Input
                  testid="first-letter-search-radio"
                  type="radio"
                  labelText="Primeira letra"
                  value="search.php?f="
                  name="SearchOption"
                  onChange={ handleChecked }
                />
                <Button
                  testid="exec-search-btn"
                  labelText="Buscar"
                  onClick={ handleSearchBtn }
                />
              </div>
            </div>

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
