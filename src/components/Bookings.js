import React, { useState, useEffect } from 'react';
import BookingDetails from './BookingDetails';
import SearchBar from './SearchBar';
import './Booking.css'

const Bookings = ({handleNotification}) => {
  useEffect(() => {
   
   handleNotification(2); 
  }, []);
  const initialBookings = [
    {
      id: 1,
      name: 'Sharook',
      mobileNo: '9995990001',
      itemName: 'Yamaha R15',
      itemNo:'KL11AS6606',
      startDate: '2024-06-15',
      endDate: '2024-06-15',
      bookingTime: '10:00 AM',
      tripStatus: 'Booked',
      advance: 100,
      balance: 900,
      isClicked: false
    },
    {
      id: 2,
      name: 'Ajmal',
      mobileNo: '8078254516',
      itemName: 'Unicorn',
      itemNo: 'KL11AK1126',
      startDate: '2024-06-26',
      endDate: '2024-06-26',
      bookingTime: '10:00 AM',
      tripStatus: 'Booked',
      advance: 200,
      balance: 700,
      isClicked: false
    },
    {
      id: 3,
      name: 'Nibras',
      mobileNo: '8078254513',
      itemName: 'Himalayan',
      itemNo: 'KL85AG1126',
      startDate: '2024-06-24',
      endDate: '2024-06-26',
      bookingTime: '11:00 AM',
      tripStatus: 'Booked',
      advance: 200,
      balance: 1000,
      isClicked: true
    }
  ];
  const [bookings, setBookings] = useState(initialBookings);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleNotificationcount = (bookings) => {
    const count = bookings.filter(booking => !booking.isClicked).length;
    handleNotification(count);
  };

  const filteredBookings = bookings.filter(booking => 
    booking.itemNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const markAsCompleted = (id) => {
    const isConfirmed = window.confirm('Confirm completion of this trip');

  // If user confirmed, proceed to remove the booking
  if (isConfirmed) {
    setBookings(bookings.filter(booking => booking.id !== id));
    // Optionally, make an API call to update the server
    // axios.put(`/api/bookings/${id}`, { status: 'completed' });
  }
  };

  const handleClicked = (id) =>{
    setBookings(prevBookings =>
      prevBookings.map(booking =>
        booking.id === id ? { ...booking, isClicked: true } : booking
      )
    );
    handleNotificationcount(bookings);
  }

  
  return(
  <div>
    <SearchBar value={searchQuery} onChange={handleSearchChange} />
    <div className="booking">
    <div className="field"><span className='span-style-f'>Total Current Booking</span><span className='span-style-l'>100</span></div>  
    <div className="detail-container">
    {filteredBookings.map((booking) => (
      <BookingDetails key={booking.id} booking={booking} markAsCompleted={markAsCompleted} handleClicked={handleClicked}/>
    ))}
    </div>
   </div> 
  </div>

  );
  
};

export default Bookings;
