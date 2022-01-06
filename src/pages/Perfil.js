import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from '../components/Button';
import profilePicture from '../images/profile.png';

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
      <div className="exploreFoodSection">
        <img
          className="imgExplore"
          src={ profilePicture }
          alt="profile ilustration"
        />
        <p className="email" data-testid="profile-email">{ `E-mail: ${email}` }</p>
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
      </div>
      <Footer />
    </div>
  );
}
