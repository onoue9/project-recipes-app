import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from '../components/Button';

export default function Perfil() {
  const [email, setEmail] = useState('');
  const history = useHistory();

  useEffect(() => {
    const emailStorage = JSON.parse(localStorage.getItem('user'));
    if (emailStorage) {
      setEmail(emailStorage.email);
    }
  }, []);

  const logoutBtn = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header title="Perfil" disabled />
      <p data-testid="profile-email">{ email }</p>
      <Button
        disabled={ false }
        testid="profile-done-btn"
        onClick={ () => { history.push('/receitas-feitas'); } }
        labelText="Receitas Feitas"
      />
      <Button
        disabled={ false }
        testid="profile-favorite-btn"
        onClick={ () => { history.push('/receitas-favoritas'); } }
        labelText="Receitas Favoritas"
      />
      <Button
        disabled={ false }
        testid="profile-logout-btn"
        onClick={ logoutBtn }
        labelText="Sair"
      />
      <Footer />
    </div>
  );
}
