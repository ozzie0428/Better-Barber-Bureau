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
    // this.singleBarberReviews();
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
     console.log("response", res.data)
      this.setState({ isDeleted: true });
    });
  };

  render() {
    
    if (this.state.isDeleted === true) {
      return <Redirect to="/api/barber" />;
    }
  
    return (
      <div className="single-barber-container">

        
        <div className="baber-info">
            <h1>Name: {this.state.barber.name}</h1>
          <img className="single-barber-img" src={this.state.barber.picture} alt="picture-of-barber" />
          <div >
            <div className="barber-location">
            <h2>Shop Location: {this.state.barber.location}</h2>
            <h2>Sevices Offered: {this.state.barber.servicesOffered}</h2>
            <h2>Price: <strong> ${this.state.barber.price}</strong></h2> 
            </div>
            
          </div>
        </div>
        <div className="barber-review">
          <h1>Reviews</h1>
          <h2>Cleanliness: <strong>{this.state.cleanlinessRating}</strong></h2>
          <h2>Accuracy: <strong>{this.state.accuracyRating}</strong> </h2>
          <h2>
            Overall Rating:
            <strong>  {this.state.overallRating}
            </strong>  </h2>
          <Link to={`/api/review/${this.state.barber._id}`}>
            <button>Leave Review</button>
            <div className="delete-barber">
          <button onClick={() => this.BarberDelete(this.state.barber._id)}>
          Delete Barber
        </button>
        </div>
          </Link>
        </div>
        
      </div>
    );
  }
}
