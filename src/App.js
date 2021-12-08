import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Comidas from './pages/Comidas';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Comidas } />
      {/* <Route exact path="/bebidas" component={ } />
      <Route exact path="/comidas/:id" render={ (props) => <xxxx { ...props } /> } />
      <Route exact path="/bebidas/:id" render={ (props) => <xxxx { ...props } /> } />
      <Route exact path="/comidas/:id/in-progress" render={ (props) => <xxxx { ...props } /> } />
      <Route exact path="/bebidas/:id/in-progress" render={ (props) => <xxxx { ...props } /> } />
      <Route exact path="/explorar" component={ } />
      <Route exact path="/explorar/comidas" component={ } />
      <Route exact path="/explorar/bebidas" component={ } />
      <Route exact path="/explorar/comidas/ingredientes" component={ } />
      <Route exact path="/explorar/bebidas/ingredientes" component={ } />
      <Route exact path="/explorar/comidas/area" component={ } />
      <Route exact path="/perfil" component={ } />
      <Route exact path="/receitas-feitas" component={ } />
      <Route exact path="/receitas-favoritas" component={ } /> */}
    </Switch>
  );
}

export default App;
