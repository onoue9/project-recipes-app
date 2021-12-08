import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnIsDisabled, setBtnIsDisabled] = useState(true);

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

  return (
    <div>
      <Input
        testid="email-input"
        placeholder="E-mail"
        type="text"
        onChange={ handleChangeEmail }
      />
      <Input
        testid="password-input"
        placeholder="Senha"
        type="password"
        onChange={ handleChangePassword }
      />
      <Button
        testid="login-submit-btn"
        labelText="Entrar"
        disabled={ btnIsDisabled }
      />
    </div>
  );
}

export default Login;
