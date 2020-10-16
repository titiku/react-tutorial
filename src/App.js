import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Feature from './features';
import Carousels from './carousels';
import Featuredetail from './featuredetail';
import FooterPage from './footer';

const home = () => <h1>Home</h1>
const features = () => <Feature />
const pricing = () => <h1>Pricing</h1>
const featuredetail = () => <Featuredetail/>

function App() {
  return (
    <div>
      <Carousels/>
      <div className="App container">
        <Switch>
          <Route path="/features/:id" component={featuredetail} />
          <Route path="/features" component={features} />
          <Route path="/pricing" component={pricing} />
          <Route path="/" component={home} />
        </Switch>
      </div>
      <FooterPage/>
    </div>
  );
}

export default App;
