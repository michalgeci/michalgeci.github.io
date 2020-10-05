import React from 'react';
import { Container } from 'shards-react'

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import './i18n'
import Navigation from './Navigation';
import { HashRouter, Route } from 'react-router-dom';


function App() {

  return (
    <HashRouter basename="/">
      <Container>
        <br/>
        <Navigation/>
        <Route exact path="/" component={() => <div>Ahoj</div>}/>
        <Route exact path="/projects" component={() => <div>Projects</div>}/>
      </Container>
    </HashRouter>
  );
}

export default App;
