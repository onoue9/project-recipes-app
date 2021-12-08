import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import Explorar from './pages/Explorar';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ExpComidaIngr from './pages/ExpComidasIngr';
import ExpBebidaIngr from './pages/ExpBebidasIngr';
import ExpComidaLocal from './pages/ExpComidaLocal';
import Perfil from './pages/Perfil';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFav from './pages/ReceitasFav';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Comidas } />
      <Route exact path="/bebidas" component={ Bebidas } />
      {/* <Route exact path="/comidas/:id" render={ (props) => <xxxx { ...props } /> } />
      <Route exact path="/bebidas/:id" render={ (props) => <xxxx { ...props } /> } />
      <Route exact path="/comidas/:id/in-progress"
        render={ (props) => <xx { ...props } /> } />
      <Route exact path="/bebidas/:id/in-progress"
        render={ (props) => <xx { ...props } /> } /> */}
      <Route exact path="/explorar" component={ Explorar } />
      <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
      <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
      <Route exact path="/explorar/comidas/ingredientes" component={ ExpComidaIngr } />
      <Route exact path="/explorar/bebidas/ingredientes" component={ ExpBebidaIngr } />
      <Route exact path="/explorar/comidas/area" component={ ExpComidaLocal } />
      <Route exact path="/perfil" component={ Perfil } />
      <Route exact path="/receitas-feitas" component={ ReceitasFeitas } />
      <Route exact path="/receitas-favoritas" component={ ReceitasFav } />
    </Switch>
  );
}

export default App;
