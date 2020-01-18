import React, { Component } from 'react'

export default class EquipmentItem extends Component {
	render() {
		
		return (
			<div className="equipment-list">
                <div id="equipment" className='equipment-item'>
                    <img src={this.props.equipmentItem.image} alt={this.props.equipmentItem.name}/>
                </div>
                <div className='equipment-description'>
                    <div className='equipment-item-name'>
                        {this.props.equipmentItem.name}
                    </div>
                    <div>
                        <strong>PRICE:</strong>
                        {this.props.equipmentItem.price}
                    </div>
                    <div>
                        {this.props.equipmentItem.description}
                    </div>
                </div>
              
			</div>
		);
	}
}
