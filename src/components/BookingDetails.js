// src/components/BookingDetails.js
import React, { useState } from 'react';
import './BookingDetails.css';


const BookingDetails = ({ booking, markAsCompleted, handleClicked  }) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetailsVisibility = () => {
    setIsDetailsVisible(!isDetailsVisible);
    handleClicked(booking.id)
  };

  return (
    <div className={`${isDetailsVisible ? '' : 'pad-bot'} ${booking.isClicked ? 'dark-bg' : 'light-bg'} booking-details`}>
      <div className="booking-summary" onClick={toggleDetailsVisibility}>
        <span className="name">{booking.itemName.padEnd(14,' ')} - #{booking.itemNo} <img src={`${process.env.PUBLIC_URL}/checkmark.svg`} alt="Checkmark" className="checkmark-icon" /></span>
        <button className="toggle-button">
          {isDetailsVisible ? '^' : '>'}
        </button>
      </div>
      {isDetailsVisible && (
        <div className="booking-extra-details">          
          <div className="field-group">
              <p><strong>Name:</strong> {booking.name}</p>
              <p><strong>Mobile:</strong> {booking.mobileNo}</p>
          </div>
          <div className="field-group">
              <p><strong>Start-Date:</strong> {booking.startDate}</p>
              <p><strong>End-Date:</strong> {booking.endDate}</p>
          </div>
          <div className="field-group">    
              <p><strong>Advance:</strong> {booking.advance} ₹</p>
              <p><strong>Balance:</strong> {booking.balance} ₹</p>
           </div>  
           <div className='center-button'>
           <button className="complete-button" onClick={() => markAsCompleted(booking.id)}>
                  Complete
          </button> 
          </div>
        </div>
      )}
      
    </div>
  );
};

export default BookingDetails;
