import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SingleBarber from "./SingleBarber";
// import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
export default class Barber extends Component {
  state = {
    barberList: [],
    newBarberName: "",
    location: "",
    servicesOffered: "",
    ratings: "",
    price: 0
  };
  componentDidMount() {
    this.updateBarberPage();
  }

  updateBarberPage = () => {
    axios.get("/api/barber").then(res => {
      console.log("res.data", res.data);
      this.setState({ barberList: res.data });
    });
  };
  createBarber = () => {
    const newBarber = {
      name: this.state.newBarberName,
      location: this.state.location,
      servicesOffered: this.state.servicesOffered,
      ratings: this.state.ratings,
      price: this.state.price
    };
    axios.post("/api/barber", newBarber).then(() => {
      const newState = { ...this.state };
      newState.newBarberName = "";
      newState.location = "";
      newState.servicesOffered = "";
      newState.ratings = "";
      newState.price = "";
      this.setState(newState);
      this.updateBarberPage();
    });
  };

  handleChange = event => {
    const inputValue = event.target.value;
    this.setState({ [event.target.name]: inputValue });
  };

  render() {
    const barberList = this.state.barberList.map((barber, i) => {
      return (
        <div className="barber-container" key={i}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3TQF-2FsOVYAxIDYEXjwGppI8VNBLOH2MxPxvuUzvvB2mN1xvEg&s" alt=""/>
          <h1><Link to={`/${barber._id}`}>{barber.name}</Link></h1> 
          <h2>{barber.location}</h2>
          <h3>{barber.ratings}</h3>

        </div>
      );
    });
    return (
      <div>
        <div>
          <input
            type="string"
            name="newBarberName"
            placeholder="Barber Name"
            required="required"
            onChange={this.handleChange}
            value={this.state.newBarberName}
          />
              <input
            type="string"
            name="location"
            placeholder="Add Location"
            required="required"
            onChange={this.handleChange}
            value={this.state.location}
          />
          <button onClick={this.createBarber}>Add Barber</button>
        </div>
        <h1>Hello from Barber</h1>
        {barberList}
        {/* <Router>
            <Switch>
        <Route exact path= "/api/barber/:barberId" component={SingleBarber} />
        </Switch>
        </Router> */}
        <SingleBarber/>
      </div>
    );
  }
}
