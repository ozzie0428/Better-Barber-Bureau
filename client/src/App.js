import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Barber from './components/Barber'
import SingleBarber from "./components/SingleBarber";
import Review from './components/Review'
import Equipment from './components/Equipment'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="nav-bar">
      
          
            <h3>Barbers</h3>
            <h3>Reviews</h3>
            <h3>Euipment Store</h3>
          
      
        </div>
        <div
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignContent: "center"
          // }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3TQF-2FsOVYAxIDYEXjwGppI8VNBLOH2MxPxvuUzvvB2mN1xvEg&s"
            alt=""
          /> <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3TQF-2FsOVYAxIDYEXjwGppI8VNBLOH2MxPxvuUzvvB2mN1xvEg&s"
          alt=""
        />
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3TQF-2FsOVYAxIDYEXjwGppI8VNBLOH2MxPxvuUzvvB2mN1xvEg&s"
            alt=""
          />
        </div>
        <Router>
        <Switch>
          <Route exact path= "/" component={Home} />
          <Route exact path= "/api/barber" component={Barber} />
          <Route exact path= "/api/barber/:barberId" component={SingleBarber} />
          <Route exact path= "/api/review" component={Review} />
          <Route exact path= "/api/equipment" component={Equipment} />
        </Switch>

        </Router>
      </div>
    )
  }
}
