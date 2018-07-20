import React, { Component } from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { Link } from 'react-router-dom'
import './App.css';
import Routes from './config/routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Interface Web Mongo</h1>
          </header>
          <Link to='/connect'>Connexion à la bdd</Link>
          <Link to='/collections'>Mes collections</Link>
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
