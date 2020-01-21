import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

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
    reviews: [],
    accuracyRating: "",
    cleanlinessRating: "",
    overallRating: ""
  };

  componentDidMount() {
    this.singleBarber();
    this.singleBarberReviews();
  }

  singleBarber = () => {
    
    const barberId = this.props.match.params.barberId;
    axios.get(`/api/barber/${barberId}`).then(res => {
      
      this.setState({
        barber: res.data
      });
    });
  };

  singleBarberReviews = async () => {
    const barberId = this.props.match.params.barberId;
    let accuracyArray = [];
    let cleanlinessArray = [];

    try {
      const response = await axios.get(`/api/review/allreviews/${barberId}`);
      const allReviews = response.data;
      allReviews.forEach(review => {
        accuracyArray.push(review.accuracy);
        cleanlinessArray.push(review.cleanliness);
      });

      const accuracyRating = this.mathSolver(accuracyArray);
      const cleanlinessRating = this.mathSolver(cleanlinessArray);
      let overallRating = (accuracyRating + cleanlinessRating) / 2;
      overallRating = this.decimalREmover(overallRating);

      this.setState({ accuracyRating, cleanlinessRating, overallRating });
    } catch (error) {
      console.log(error);
    }
  };
  mathSolver = array => {
    let sum = array.reduce((a, b) => a + b, 0);

    let avg = sum / array.length;

    avg = this.decimalREmover(avg);
    return avg;
  };

  decimalREmover = value => {
    let number = value;
    number = number.toString();
    number = number.slice(0, 4);
    number = parseFloat(number);
    return number;
  };

  BarberDelete = barberId => {
    axios.delete(`/api/barber/${barberId}`).then(res => {
     
      this.setState({ isDeleted: true });
    });
  };

  render() {
    
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
        <div>
          <h1>Barber</h1>
        </div>

        <div style={{ width: "12vw" }}>
          <img src={this.state.barber.picture} alt="picture-of-barber" />
          <div style={{ width: "35vw" }}>
            <h3>Name: {this.state.barber.name}</h3>
            <h3>Shop Location: {this.state.barber.location}</h3>
            <h3>Sevices Offered: {this.state.barber.servicesOffered}</h3>
            <button></button>
          </div>
        </div>
        <div style={{ border: "1px solid black" }}>
          <h1>Reviews</h1>
          <h3>Cleanliness:{this.state.cleanlinessRating}</h3>
          <h3>Accuracy: {this.state.accuracyRating}</h3>
          <h3 style={{ paddingBottom: "50%" }}>
            Overall Rating:
            {this.state.overallRating}
          </h3>
          <Link to={`/api/review/${this.state.barber._id}`}>
            <button>Leave Review</button>
          </Link>
        </div>
        {/* <h1>HELLO FROM SINGLE BARBER </h1>
                <button onClick={() => this.BarberDelete(this.state.barberId)}>
          Delete Barber
        </button> */}
      </div>
    );
  }
}
