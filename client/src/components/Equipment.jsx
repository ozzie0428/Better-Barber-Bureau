import React, { Component } from 'react'
import axios from "axios";
// import { Link } from "react-router-dom";

export default class Equipment extends Component {
    state = {
        newEquipmetName: "",
         image: "",
         description: "",
         price: 0
    }
    componentDidMount() {
        this.updateEquipmetPage();
      }
    
      updateEquipmetPage = () => {
        axios.get("/api/equipmet").then(res => {
          console.log("res.data", res.data);
          this.setState({ equipmetList: res.data });
        });
      };
      createEquipmet = () => {
        const newEquipmet = {
          name: this.state.newEquipmetName,
          image: this.state.image,
          price: this.state.price
        };
        axios.post("/api/equipmet", newEquipmet).then(() => {
          const newState = { ...this.state };
          newState.newEquipmetName = "";
          newState.price = "";
          this.setState(newState);
          this.updateEquipmetPage();
        });
      };
    
      handleChange = event => {
        const inputValue = event.target.value;
        this.setState({ [event.target.name]: inputValue });
      };
    





    render() {
        return (
            <div>
                <h1>HELLO FROM EQUIPMET </h1>
            </div>
        )
    }
}
