// src/components/Card.js
import React, { useState } from 'react';
import './Card.css';
import OutlinedButton from './OutlinedButton';
import { EditIcon,DeleteIcon,CancelIcon,SaveIcon} from './icons/Icon'

const Card = ({ item, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(item);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetailsVisibility = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    onDelete(item.id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    onUpdate(formData);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <div className="field-group">
            <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} placeholder="Item Name" />
            <input type="text" name="itemNo" value={formData.itemNo} onChange={handleChange} placeholder="Item No" />
          </div>
          <div className="field-group">
            <input type="text" name="pricePerDay" value={formData.pricePerDay} onChange={handleChange} placeholder="Price/Day" />
            <input type="text" name="pricePerKm" value={formData.pricePerKm} onChange={handleChange} placeholder="Price/Add Km" />
          </div>
          <div className="field-group">
            <input type="text" name="freeKmPerDay" value={formData.freeKmPerDay} onChange={handleChange} placeholder="Free Km/Day" />
            <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
          </div>
          <div className="button-group">
          <OutlinedButton onClick={handleSave} className="outlined-button " component={SaveIcon}/>
          <OutlinedButton onClick={handleEdit} className="outlined-rbutton" component={CancelIcon}/>
          </div>
        </>
      ) : (
        <>
      <div className={`${isDetailsVisible ? '' : 'pad-bot'} card-details`}>
      <div className="card-summary" onClick={toggleDetailsVisibility}>
        <span className="c-name">{item.itemName.padEnd(14,' ')} - #{item.itemNo} </span>
        <button className="toggle-button">
          {isDetailsVisible ? '^' : '>'}
        </button>
      </div>
      {isDetailsVisible && (
          <div className="card-extra-details">
          <div className="field-group">
            <p><strong>Price/Day : {item.pricePerDay} ₹</strong></p>
            <p><strong>Price/Add Km : {item.pricePerKm} ₹</strong></p>
          </div>
          <div className="field-group">
            <p><strong>Free Km/Day : {item.freeKmPerDay}</strong></p>
            <p><strong>Location : {item.location}</strong></p>
          </div>
          <div className="button-group">
            <OutlinedButton onClick={handleEdit} className="outlined-button" component={EditIcon}/>
            <OutlinedButton onClick={handleDelete} className="outlined-rbutton" component={DeleteIcon}/>
          </div>
          </div>
      )}
        </div>
        </>
      )}
    </div>
  );
};

export default Card;
