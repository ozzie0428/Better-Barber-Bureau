import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Barber from './components/Barber'
import Review from './components/Review'
import Equipment from './components/Equipment'

export default class App extends Component {
  render() {
    return (
      <div>

<nav>
          <ul>
            <li>Barbers</li>
            <li>Reviews</li>
            <li>Euipment Store</li>
          </ul>
        </nav>
        
        <Router>
        <Switch>
          <Route exact path= "/" component={Home} />
          <Route exact path= "/barber" component={Barber} />
          <Route exact path= "/review" component={Review} />
          <Route exact path= "/equipment/:supplyId" component={Equipment} />
        </Switch>

        </Router>
      </div>
    )
  }
}
