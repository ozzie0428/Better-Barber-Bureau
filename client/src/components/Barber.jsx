import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default class Barber extends Component {
  state = {
    barberList: [] ,
    newBarberName: "",
    location: "",
    servicesOffered: "",
    ratings: "",
    price: 0,
    picture: "",
    reviews: []
  };
    componentDidMount() {
      this.updateBarberPage();
    }

  updateBarberPage = () => {
    axios.get("/api/barber").then(res => {
      this.setState({ barberList: res.data });
    });
  };
  createBarber = () => {
    const newBarber = {
      name: this.state.newBarberName,
      location: this.state.location,
      servicesOffered: this.state.servicesOffered,
      ratings: this.state.ratings,
      price: this.state.price,
      picture: this.state.picture
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
          <div>

          <h1>
            <Link
              style={{ textDecoration: "none" }}
              to={`/api/barber/${barber._id}`}
            >
              Name: {barber.name}
            </Link>
          </h1>
          
          </div>
          <img className="barber-img" src={barber.picture} alt="barber image" />
          <div>

          <h2>Location: <br/>
          {barber.location}</h2>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="barber-input">
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
          <input
            type="string"
            name="servicesOffered"
            placeholder="Services"
            required="required"
            onChange={this.handleChange}
            value={this.state.servicesOffered}
          />
        
          <input
            type="string"
            name="price"
            placeholder="price"
            required="required"
            onChange={this.handleChange}
            value={this.state.price}
          />
          <input
            type="string"
            name="picture"
            placeholder="Add picture"
            required="required"
            onChange={this.handleChange}
            value={this.state.picture}
          />
          <button onClick={this.createBarber}>Add Barber</button>
        </div>
        
        <div
          className="barberParent"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap"
          }}
        >
          {barberList}
        </div>
       
      </div>
    );
  }
}
