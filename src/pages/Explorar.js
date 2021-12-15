import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from '../components/Button';

export default function Explorar() {
  const history = useHistory();
  return (
    <div>
      <Header title="Explorar" disabled />
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
      <Footer />
    </div>
  );
}
