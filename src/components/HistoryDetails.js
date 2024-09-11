// src/components/BookingDetails.js
import React, { useState } from 'react';
import './HistoryDetails.css';


const HistoryDetails = ({ booking }) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetailsVisibility = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
  <div className={`${booking.tripStatus === 'cancelled' ? 't-history-details' : 'history-details'} `}>
      <div className="history-summary" onClick={toggleDetailsVisibility}>
        <span className="name">{booking.bikeName.padEnd(14,' ')} - #{booking.bikeNo} {booking.tripStatus !== 'cancelled' ? <img src={`${process.env.PUBLIC_URL}/checkmark.svg`} alt="Checkmark" className="checkmark-icon" />: <span className='style-x'>X</span>}</span>
        <button className="h-toggle-button">
          {isDetailsVisible ? '^' : '>'}
        </button>
      </div>
      {isDetailsVisible && (
        <div className="history-extra-details">          
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
        </div>
      )}
    </div>
  );
};

export default HistoryDetails;
