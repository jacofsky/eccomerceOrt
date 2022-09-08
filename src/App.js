import React from 'react';
import './App.css';
import NavBar from './Componentes/NavBar/NavBar.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import { CartProvider } from './CartContext';

import Home from './Views/Home/Home.js'
import Detalle from './Views/Detalle/Detalle.js'
import Brand from './Views/Brand/Brand.js'
import Carrito from './Views/Carrito/Carrito.js'
import Formulario from './Views/Formulario/Formulario';


class App extends React.Component {
  render() {
    return (
        <CartProvider>
      <Router>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/detalle/:id" component={Detalle}/>
            <Route path="/brand/:brand" component={Brand}/>
            <Route path="/carrito" component={Carrito}/>
            <Route path="/formulario" component={Formulario}/>
          </Switch>
        </div>
      </Router>
        </CartProvider>
    );
  }
  
}

export default App;
