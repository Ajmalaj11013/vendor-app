// src/components/Card.js
import React, { useState } from 'react';
import './Card.css';

const Card = ({ bike, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(bike);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    onDelete(bike.id);
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
    <div className="card">
      {isEditing ? (
        <>
          <div className="field-group">
            <input type="text" name="bike" value={formData.bike} onChange={handleChange} placeholder="Bike" />
            <input type="text" name="bikeNo" value={formData.bikeNo} onChange={handleChange} placeholder="Bike No" />
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
            <button onClick={handleSave}>Save</button>
            <button onClick={handleEdit}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <div className="field-group">
            <p><strong>Bike:</strong> {bike.bike}</p>
            <p><strong>Bike No:</strong> {bike.bikeNo}</p>
          </div>
          <div className="field-group">
            <p><strong>Price/Day:</strong> {bike.pricePerDay}</p>
            <p><strong>Price/Add Km:</strong> {bike.pricePerKm}</p>
          </div>
          <div className="field-group">
            <p><strong>Free Km/Day:</strong> {bike.freeKmPerDay}</p>
            <p><strong>Location:</strong> {bike.location}</p>
          </div>
          <div className="button-group">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
