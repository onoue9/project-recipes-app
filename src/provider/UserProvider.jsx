import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../context/UserContext';

function UserProvider({ children }) {
  const [searchInput, setSearchInput] = useState({});
  const [apiResult, setApiResult] = useState([]);

  const ContextObj = {
    searchInput,
    setSearchInput,
    apiResult,
    setApiResult,
  };

  //USE EFFECT (UPDATE)
  async function fetchAPI() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/${searchInput.filter}${searchInput.value}`);
    const result = response.json();
    setApiResult(result.meals);
  }

  return (
    <UserContext.Provider value={ ContextObj }>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default UserProvider;
