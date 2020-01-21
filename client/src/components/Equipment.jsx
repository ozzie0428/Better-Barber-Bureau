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
		  console.log("res.data", res.data);
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
		console.log("this.props", this.props);
		const equipmentList = this.state.equipmentList.map((equipment, i) => {
		  return (
			<div className="equipment-container" key={i}>
			  <h1>
				<Link
				  style={{ textDecoration: "none" }}
				  to={`/api/equipment/${equipment._id}`}
				>
				  Name: {equipment.name}
				</Link>
			  </h1>
			  <img src={equipment.image} alt="equipment image" />
			  <h2>Description:</h2> {equipment.description}
			  <h3>Price: $ {equipment.price}  </h3>
			</div>
		  );
		});
		return (
		  <div>
			<div>
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
			  {equipmentList}
			</div>
			
		  </div>
		);
	  }
}