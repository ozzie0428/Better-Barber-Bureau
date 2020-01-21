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
          <a href="/api/barber/">
            <h3>Barbers</h3>
          </a>
          <a href="/api/">
            <h3>Home</h3>
          </a>
          <a href="/api/equipment">
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
        </div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/api/barber" component={Barber} />
            <Route
              exact
              path="/api/barber/:barberId"
              component={SingleBarber}
            />
            {/* <Route exact path= "/api/review" component={Review} /> */}
            <Route path="/api/review/:barberId" component={Review} />
            <Route exact path="/api/equipment" component={Equipment} />
            <Route
              exact
              path="/api/equipment/:equipmentId"
              component={SingleEquipment}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
