import React, { Component } from 'react';
// import equipmentData from '../equipmentData'
// import EquipmentItem from './EquipmentItem'
import axios from "axios";
import { Link } from "react-router-dom";
export default class Equipment extends Component {
	state = {
		equipmentList: [] ,
		newEquipmentName: "",
		description: "",
		price: 0,
		image: "",
	  };
		componentDidMount() {
		  this.updateEquipmentPage();
		}
	
	  updateEquipmentPage = () => {
		axios.get("/api/equipment").then(res => {
		 
		  this.setState({ equipmentList: res.data });
		});
	  };
	  createEquipment = () => {
		const newEquipment = {
		  name: this.state.newEquipmentName,
		  description: this.state.description,
		  price: this.state.price,
		  image: this.state.image
		};
		axios.post("/api/equipment", newEquipment).then(() => {
		  const newState = { ...this.state };
		  newState.newEquipmentName = "";
		  newState.description = "";
		  newState.price = "";
		  this.setState(newState);
		  this.updateEquipmentPage();
		});
	  };
	
	  handleChange = event => {
		const inputValue = event.target.value;
		this.setState({ [event.target.name]: inputValue });
	  };
	
	  render() {
		
		const equipmentList = this.state.equipmentList.map((equipment, i) => {
		  return (
			<div className="equipment-container" key={i}>
			  <p>
				<Link
				  style={{ textDecoration: "none" }}
				  to={`/equipment/${equipment._id}`}
				>
				  Name: {equipment.name}
				</Link>
			  </p>
			  <div className="equipment-img">
			  <img src={equipment.image} alt="equipment image" />
			  </div>
			  <h2>Description:</h2> <p>{equipment.description}</p> 
			  <h2>Price: $ {equipment.price}  </h2>
			</div>
		  );
		});
		return (
		  <div>
			<div className="equipment-input"> 
			  <input
				type="string"
				name="newEquipmentName"
				placeholder="Equipment Name"
				required="required"
				onChange={this.handleChange}
				value={this.state.newEquipmentName}
			  />
			  <input
				type="string"
				name="description"
				placeholder="description"
				required="required"
				onChange={this.handleChange}
				value={this.state.description}
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
				name="image"
				placeholder="Add picture"
				required="required"
				onChange={this.handleChange}
				value={this.state.image}
			  />
			  <button onClick={this.createEquipment}>Add Equipment</button>
			</div>
			
			<div
			  className="equipmentParent"
			  style={{
				display: "flex",
				justifyContent: "space-around",
				flexWrap: "wrap"
			  }}
			>
				<div className="equipment-parent">
			  {equipmentList}
			  </div>
			</div>
			
		  </div>
		);
	  }
}