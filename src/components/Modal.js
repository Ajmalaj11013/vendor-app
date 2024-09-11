// src/components/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ show, handleClose, handleSubmit, handleChange, formData }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Item</h2>
        <form onSubmit={handleSubmit} className="bike-form">
          <div className="form-row">
            <div className="form-group">
              <label>Item:</label>
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Item No:</label>
              <input
                type="text"
                name="itemNo"
                value={formData.itemNo}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Price/Day:</label>
              <input
                type="number"
                name="pricePerDay"
                value={formData.pricePerDay}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Price/Add Km:</label>
              <input
                type="number"
                name="pricePerKm"
                value={formData.pricePerKm}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Free Km/Day:</label>
              <input
                type="number"
                name="freeKmPerDay"
                value={formData.freeKmPerDay}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Location:</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="modal-buttons">
            <button type="button" onClick={handleClose}>Cancel</button>
            <button type="submit">Add Item</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
