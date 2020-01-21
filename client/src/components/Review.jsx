import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Review extends Component {
  state = {
    commentList: [],
    name: "",
    cleanliness: "",
    accuracy: "",
    image: "",
    comment: ""
  };
  componentDidMount() {
    this.updateReviewPage();
  }

  updateReviewPage = () => {
    // /api/review/allreviews/5e23b994ad30862cdc72f99b/
    const barberId = this.props.match.params.barberId;
    axios.get(`/api/review/allreviews/${barberId}`).then(res => {
      this.setState({ commentList: res.data });
    });
  };
  createReview = () => {
    const barberId = this.props.match.params.barberId;
    const newReview = {
      accuracy: this.state.accuracy,
      cleanliness: this.state.cleanliness,
      ratings: this.state.ratings,
      picture: this.state.picture,
      comment: this.state.comment
    };
    axios
      .post(`/api/review/${barberId}`, newReview)
      .then(res => {
        const newComment = res.data.createdReview;
        let copyOfComments = [...this.state.commentList];
        copyOfComments.push(newComment);
        this.setState({ commentList: copyOfComments });
        this.resetState();
      })
      .catch(error => console.log("post review error", error.mesage));
  };

  resetState() {
    this.setState({
      accuracy: "",
      cleanliness: "",
      servicesOffered: "",
      comment: ""
    });
  }

  handleChange = event => {
    const inputValue = event.target.value;

    this.setState({ [event.target.name]: inputValue });
  };

  commentClick = () => {
   
  };
  render() {
    const commentList = this.state.commentList.map((review, i) => {
      return (
        <div key={i}>
          {/* <Link */}
          {/* style={{ textDecoration: "none" }}
                // to={`/api/barber/${barber._id}`}
              > */}
          Barber Comment: {review.comment}
          {/* </Link> */}
          {/* <img src={barber.picture} alt="barber image" /> */}
          {/* <h2>Location: {barber.location}</h2> */}
          {/* <h3>Rating: {barber.ratings} / 5 </h3> */}
        </div>
      );
    });

    return (
      <div>
        <div className="review-submit">
          <h1> REVIEWS</h1>

          {/* <div>{this.state.comment}</div> */}
        </div>
        <div className="container-container">
          <div className="comment-container">
            <h1>Comments:</h1>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facere numquam. <br/> Magnam explicabo ipsam laudantium. Sint, modi rem debitis maiores repellendus, <br/> recusandae eaque molestiae asperiores pariatur illum dolorem veritatis alias.</p> */}
            {commentList}
          </div>

          <div className="review-container">
            <div className="review-btn">
              <a href={`/api/barber/${this.props.match.params.barberId}`}>Back To Barber</a>

            </div>
            <div>
              <input
                type="number"
                name="cleanliness"
                placeholder="Rate Cleanliness"
                required="required"
                onChange={this.handleChange}
                value={this.state.cleanliness}
              />
              <h3>Cleanliness : {this.state.cleanliness} </h3>
            </div>
            <div>
              <input
                type="number"
                name="accuracy"
                placeholder="Rate Accuracy"
                required="required"
                onChange={this.handleChange}
                value={this.state.accuracy}
              />
              <h3>Accuracy : {this.state.accuracy}</h3>
            </div>
            <div>
              <input
                type="string"
                name="comment"
                placeholder="Leave Comment"
                required="required"
                onChange={this.handleChange}
                value={this.state.comment}
              />
            </div>
              <button onClick={this.createReview}>Submit Comment</button>
            {/* <div>
              <input
                type="number"
                name="overallRating"
                placeholder="Rate Overall Rating"
                required="required"
                onChange={this.handleChange}
                value={this.state.overallRating}
              />
              <h3>Overall Rating : {this.state.overallRating}</h3>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
