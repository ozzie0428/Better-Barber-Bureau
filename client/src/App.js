import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Barber from "./components/Barber";
import SingleBarber from "./components/SingleBarber";
import Review from "./components/Review";
import Equipment from "./components/Equipment";
import SingleEquipment from "./components/SingleEquipment";
// import {Link} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="nav-bar">
          <a href="/barber">
            <h3>Barbers</h3>
          </a>
          <a href="/">
            <h3>Home</h3>
          </a>
          <a href="/equipment">
            <h3>Euipment Store</h3>
          </a>
        </div>
        <div
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   alignContent: "center"
        // }}
        >
          <div className="img-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3TQF-2FsOVYAxIDYEXjwGppI8VNBLOH2MxPxvuUzvvB2mN1xvEg&s"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3TQF-2FsOVYAxIDYEXjwGppI8VNBLOH2MxPxvuUzvvB2mN1xvEg&s"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3TQF-2FsOVYAxIDYEXjwGppI8VNBLOH2MxPxvuUzvvB2mN1xvEg&s"
              alt=""
            />
          </div>

          {/* <h1>Better Barber Bureau</h1> 
        
          <p>The place where to find a barber in your area without the hassle of </p> */}
        </div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/barber" component={Barber} />
            <Route exact path="/barber/:barberId" component={SingleBarber} />
            <Route path="/review/:barberId" component={Review} />
            <Route exact path="/equipment" component={Equipment} />
            <Route
              exact
              path="/equipment/:equipmentId"
              component={SingleEquipment}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
