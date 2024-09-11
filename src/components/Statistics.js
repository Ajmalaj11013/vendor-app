import React, { useState } from 'react';
import './Statistics.css';

const Statistics = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="statistics">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={() => handleTabChange('tab1')}
        >
          Ongoing Sales
        </button>
        <button
          className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => handleTabChange('tab2')}
        >
          Completed Sales
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'tab1' && (
          <div className="tab-pane">
            <div className="field"><span className='span-style-f'>Total Current Booking</span><span className='span-style-l'>100</span></div>
            <div className="field"><span className='span-style-f'>Today's Revenue</span><span className='span-style-l'>4000 ₹</span></div>
            <div className="field"><span className='span-style-f'>Yesterday's Revenue</span><span className='span-style-l'>5000  ₹</span></div>
            <div className="field"><span className='span-style-f'>Today's Cancellations</span><span className='span-style-l'>3</span></div>
            <div className="field"><span className='span-style-f'>Yesterday's Cancellations</span><span className='span-style-l'>1</span></div>
          </div>
        )}
        {activeTab === 'tab2' && (
          <div className="tab-pane">
            <div className="field">Total Revenue      : 55000</div>
            <div className="field">Total Bookings     : 1200</div>
            <div className="field">Total Cancellations: 150 </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Statistics;
