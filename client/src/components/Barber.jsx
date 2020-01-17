import React, { Component } from 'react'
import axios from 'axios'

export default class Barber extends Component {
    state ={
        barberList: [],
        newBarberName: "",
        location: "",
        servicesOffered: "",
         ratings: "",
         price: 0
    }
    componentDidMount() {
        this.updateBarberPage()
    }

    updateBarberPage = () => {
        axios.get("/barber").then(res => {
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
        axios.post("/barber", newBarber).then(() => {
          const newState = { ...this.state };
          newState.newBarberName = "";
          newState.location = "";
          newState.servicesOffered="";
          newState.ratings="";
          newState.price="";
          this.setState(newState);
          this.updateBarberPage();
        });
      };




    render() {
        return (
            <div>
                <h1>Hello from Barber</h1>
            </div>
        )
    }
}
