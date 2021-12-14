import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import profile from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';
import Input from './Input';
import Button from './Button';
import Context from '../context/Context';
import ImageButton from './ImageButton';

export default function Header({ title, disabled = false }) {
  const [enableInput, setEnableInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [checkedRadio, setCheckedRadio] = useState('');
  const { fetchAPI, mealOrDrink } = useContext(Context);
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
      fetchAPI(checkedRadio, mealOrDrink, inputValue);
    }
  };

  return (
    <div>
      <ImageButton
        testid="profile-top-btn"
        onClick={ handleProfileClick }
        imageSrc={ profile }
        altImage="foto de perfil"
      />
      <h2 data-testid="page-title">{ title }</h2>
      { !disabled
      && (
        <div>
          <ImageButton
            testid="search-top-btn"
            onClick={ handleSearchClick }
            imageSrc={ search }
            altImage="icone de busca"
          />
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
                  disabled={ false }
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
  disabled: PropTypes.bool,
};

Header.defaultProps = {
  disabled: false,
};
