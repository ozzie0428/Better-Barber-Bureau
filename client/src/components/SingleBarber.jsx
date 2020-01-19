import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class SingleBarber extends Component {
  state = {
    barber: {
      _id: null
    },
    barberList: [],
    updateBarberName: "",
    location: "",
    servicesOffered: "",
    ratings: "",
    price: 0,
    isDeleted: false,
  
  };

  componentDidMount() {
    this.singleBarber()
  }

  singleBarber = () => {
    // console.log("VAlUE",this.props.match)
    const barberId = this.props.match.params.barberId;
    axios.get(`/api/barber/${barberId}`).then(res => {
        console.log("single barber response", res.data);
      this.setState({
        barber: res.data
      });
    });
  };
  BarberDelete = barberId => {
    axios.delete(`/api/barber/${barberId}`).then(res => {
      console.log("PROPS", this.props);
      console.log("Barber Deleted");
      this.setState({ isDeleted: true });
    });
  };

  render() {
    // console.log("BARBER", this.props);
    if (this.state.isDeleted === true) {
      return <Redirect to="/api/barber" />;
    }
    const picture =
      "https://s3-media0.fl.yelpcdn.com/bphoto/9iMONV6ohccMoshgE2GAuw/ls.jpg";
    return (
      <div
        style={{
          display: "flex",
          /* align-content: center; */
          justifyContent: "space-evenly"
        }}
      >
        <div style={{ width: "12vw" }}>
          <img src={this.state.barber.picture} alt="picture-of-barber" />
          <div style={{width: "35vw"}}>
            <h3>Name: {this.state.barber.name}</h3>
            <h3>Shop Location: {this.state.barber.location}</h3>
            <h3>Sevices Offered: {this.state.barber.servicesOffered}</h3>
          </div>
        </div>
        <div style={{ border:"1px solid black" }}>
          <h1>Reviews</h1>
          <h3>Cleanliness:</h3>
          <h3>Accuracy:</h3>
          <h3 style={{ paddingBottom: "50%"}}>Overall Rating:</h3>
          <button>Leave Review</button>
        </div>
        {/* <h1>HELLO FROM SINGLE BARBER </h1>
                <button onClick={() => this.BarberDelete(this.state.barberId)}>
          Delete Barber
        </button> */}
      </div>
    );
  }
}
