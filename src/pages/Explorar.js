import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from '../components/Button';
import exploreImg from '../images/explore.png';

export default function Explorar() {
  const history = useHistory();
  return (
    <div>
      <Header title="Explorar" disabled />
      <div className="exploreSection">
        <img
          className="imgExplore"
          src={ exploreImg }
          alt="explore ilustration"
        />
        <Button
          disabled={ false }
          testid="explore-food"
          labelText="Explorar Comidas"
          onClick={ () => { history.push('/explorar/comidas'); } }
        />
        <Button
          disabled={ false }
          testid="explore-drinks"
          labelText="Explorar Bebidas"
          onClick={ () => { history.push('/explorar/bebidas'); } }
        />
      </div>
      <Footer />
    </div>
  );
}
