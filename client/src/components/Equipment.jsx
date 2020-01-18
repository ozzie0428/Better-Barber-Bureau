import React, { Component } from 'react';
import equipmentData from '../equipmentData'
import EquipmentItem from './EquipmentItem'

export default class Equipment extends Component {
	render() {
		console.log(equipmentData);
		return (
			<div className="equipment">
				<h1>Shopping</h1>
                <div className="equipment-container">
				{equipmentData.map((equipmentItem, i) => {
					
					return <EquipmentItem equipmentItem={equipmentItem} key={i} />;
				})}
                </div>
			</div>
		);
	}
}