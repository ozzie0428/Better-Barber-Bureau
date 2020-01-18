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
        <div className="nav-bar">
      <nav className="nav-list">
          <ul>
            <li>Barbers</li>
            <li>Reviews</li>
            <li>Euipment Store</li>
          </ul>
        </nav>
        </div>
        <Router>
        <Switch>
          <Route exact path= "/" component={Home} />
          <Route exact path= "/api/barber" component={Barber} />
          {/* <Route exact path= "/api/barber/:barberId" component={Barber} /> */}
          <Route exact path= "/api/review" component={Review} />
          <Route exact path= "/api/equipment" component={Equipment} />
        </Switch>

        </Router>
      </div>
    )
  }
}
