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
          
          Barber Comment: {review.comment}
          
        </div>
      );
    });

    return (
      <div>
        <div className="review-submit">
          <h1> REVIEWS</h1>

          
        </div>
        <div className="container-container">
          <div className="comment-container">
            <h1>Comments:</h1>
           
           <div className="comment-list">
            {commentList}
            </div>
          </div>

          <div className="review-container">
            <div className="review-btn">
              <a href={`/barber/${this.props.match.params.barberId}`}>Back To Barber</a>

            </div>
            <div className="review-input">
              <div>
                <h3>Cleanliness : {this.state.cleanliness} </h3>
              <input
                type="number"
                name="cleanliness"
                placeholder="Rate Cleanliness"
                required="required"
                onChange={this.handleChange}
                value={this.state.cleanliness}
              />
            </div>
            <div>
              <h3>Accuracy : {this.state.accuracy}</h3>
              <input
                type="number"
                name="accuracy"
                placeholder="Rate Accuracy"
                required="required"
                onChange={this.handleChange}
                value={this.state.accuracy}
              />
            </div>
            <div>
              <h3>Comment :</h3>
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
            
          </div>
          </div>
        </div>
      </div>
    );
  }
}
