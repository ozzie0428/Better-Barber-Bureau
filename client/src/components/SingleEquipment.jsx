import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom";


export default class EquipmentItem extends Component {
    state ={
        equipment: {
            _id: null
        },
        equipmentList: [] ,
		updateEquipmentName: "",
		description: "",
		price: 0,
        image: "",
        isDeleted: false
    }
    componentDidMount() {
        this.singleEquipment()
      }
    
      singleEquipment = () => {
        
        const equipmentId = this.props.match.params.equipmentId;
        axios.get(`/api/equipment/${equipmentId}`).then(res => {
           
          this.setState({
            equipment: res.data
          });
        });
      };
      EquipmentDelete = equipmentId => {
        axios.delete(`/api/equipment/${equipmentId}`).then(res => {
        
          this.setState({ isDeleted: true });
        });
      };
    
	render() {
		if (this.state.isDeleted === true) {
            return <Redirect to="/api/equipment" />;
          }
        
          return (

            <div>
              <h1>Equipment</h1>
            
              
              <div style={{ width: "12vw" }}>
                <img src={this.state.equipment.image} alt="picture-of-equipment" />
                <div style={{width: "35vw"}}>
                  <h3>Name: {this.state.equipment.name}</h3>
                  <h3>Description: {this.state.equipment.description}</h3>
                  <h3>Price: {this.state.equipment.price}</h3>
                </div>
              </div>
             
              {/* 
                      <button onClick={() => this.EquipmentDelete(this.state.equipmentId)}>
                Delete Equipment
              </button> */}
            </div>
          );
		
	}
}
