import React from 'react';
import PropTypes from 'prop-types';
import UserContext from '../context/UserContext';

function UserProvider({ children }) {
  return (
    <UserContext.Provider value={ [] }>
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
