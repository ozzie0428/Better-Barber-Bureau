import React, { Component } from 'react'

export default class Review extends Component {
  state ={
    name: "",
    cleanliness: "",
    customerSatisfaction: "",
    pricing: 0,
    accuracy: 0,
    overallRating: 0,
    image: "",
    email: ""
  }

  handleChange = event => {
      console.log('HELLO')
    // const inputValue = event.target.value;
    
    // this.setState({ [event.target.name]: inputValue });
  };
    render() {
        return (
            <div>
                <div>
                <h1> REVIEWS</h1>
                 </div>
                 <div>
                     <h1>Comments</h1>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facere numquam. <br/> Magnam explicabo ipsam laudantium. Sint, modi rem debitis maiores repellendus, <br/> recusandae eaque molestiae asperiores pariatur illum dolorem veritatis alias.</p>
                 </div>
                 <div>
                    <button>Add review</button>
                    <h3>Cleanliness :</h3>
                    <h3>Customer Satisfaction :</h3>
                    <h3>Pricing :</h3>
                    <h3>Accuracy :</h3>
                    <h3>Overall Rating :</h3>
                    
                 </div>
                 <div>
                     <h1>Upload Image</h1>
                     <input type="text" value={this.state.iamge} placeholder="Upload Image" name="imagie" />
                    <button>
                        Upload Image
                    </button>
                 </div>

                 {/* <div>
                 <input
              type="string"
              name="name"
              placeholder="Your Name"
              required="required"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <button>
                Sumbit Email
            </button>
                 </div>
                 <div>
                 <input
              type="email"
              name=""
              placeholder="Your Email"
              required="required"
            //   onChange={}
            //   value={}
            />
                 </div> */}
                 
            </div>
        )
    }
}
