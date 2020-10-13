import React from 'react';
import { Container } from 'shards-react'

import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import './i18n'
import Navigation from './Navigation';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Projects from './Projects';
import Bio from './Bio';
import Page404 from './Page404';


function App() {

  return (
    <HashRouter basename="/">
      <Container>
        <br />
        <Navigation />
        <Switch>
          <Route exact path="/" component={() => <Bio />} />
          <Route exact path="/projects" component={() => <Projects />} />
          <Route component={() => <Page404/>} />
        </Switch>
      </Container>
    </HashRouter>
  );
}

export default App;
