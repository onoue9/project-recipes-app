import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Input from '../components/Input';
import Button from '../components/Button';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnIsDisabled, setBtnIsDisabled] = useState(true);
  const history = useHistory();

  const verifyInput = () => {
    const emailValidation = /\S+@\S+.com/;
    const emailVerified = emailValidation.test(email);
    const passwordMinLength = 6;
    if (emailVerified && password.length >= passwordMinLength) {
      setBtnIsDisabled(false);
    } else {
      setBtnIsDisabled(true);
    }
  };

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
    verifyInput();
  };

  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
    verifyInput();
  };

  const handleClick = () => {
    const objStorage = { email };
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify(objStorage));
    history.push('/comidas');
  };

  return (
    <div>
      <Input
        testid="email-input"
        placeholder="E-mail"
        type="text"
        onChange={ handleChangeEmail }
        value={ email }
      />
      <Input
        testid="password-input"
        placeholder="Senha"
        type="password"
        onChange={ handleChangePassword }
        value={ password }
      />
      <Button
        testid="login-submit-btn"
        labelText="Entrar"
        disabled={ btnIsDisabled }
        onClick={ handleClick }
      />
    </div>
  );
}

export default Login;
