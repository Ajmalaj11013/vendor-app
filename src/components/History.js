import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import SearchIcon from './SearchIcon';
import styles from './Available.module.css';
import HistoryDetails from './HistoryDetails';
import './History.css';



const History = () => {
  const initialHistory = [
    {
      id: 1,
      name: 'Sharook',
      mobileNo: '9995990001',
      bikeName: 'Yamaha R15',
      bikeNo:'KL11AS6606',
      startDate: '2024-06-15',
      endDate: '2024-06-15',
      bookingTime: '10:00 AM',
      tripStatus: 'Booked',
      advance: 100,
      balance: 900
    },
    {
      id: 2,
      name: 'Ajmal',
      mobileNo: '8078254516',
      bikeName: 'Unicorn',
      bikeNo: 'KL11AK1126',
      startDate: '2024-06-26',
      endDate: '2024-06-26',
      bookingTime: '10:00 AM',
      tripStatus: 'Booked',
      advance: 200,
      balance: 700
    },
    {
      id: 3,
      name: 'Nibras',
      mobileNo: '9070254515',
      bikeName: 'Exter',
      bikeNo: 'KL85B7604',
      startDate: '2024-06-26',
      endDate: '2024-06-26',
      bookingTime: '10:00 AM',
      tripStatus: 'cancelled',
      advance: 500,
      balance: 1200
    }
  ];
  const [history, setHistory] = useState(initialHistory);
  const [startDate, setStartDate] = useState(new Date());
  
  return(
  <div>
    <div className={styles['search-bar']}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy/MM/dd"
        />
        <SearchIcon className="search-icon" />
      </div>
  <div className='h-booking'>
    {history.map((booking) => (
      <HistoryDetails key={booking.id} booking={booking} />
    ))}
  </div>
  </div>  
  );
  
};

export default History;
