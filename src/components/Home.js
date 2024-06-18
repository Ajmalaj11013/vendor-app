// src/components/Home.js
import React, { useState } from 'react';
import Card from './Card';
import './Home.css';

const Home = () => {
  const initialBikes = [
    {
      id: 1,
      bike: 'Yamaha R15',
      bikeNo: 'MH12AB1234',
      pricePerDay: '500',
      pricePerKm: '5',
      freeKmPerDay: '100',
      location: 'Pune'
    }
  ];

  const [bikes, setBikes] = useState(initialBikes);

  const addNewBike = () => {
    const newBike = {
      id: bikes.length + 1,
      bike: '',
      bikeNo: '',
      pricePerDay: '',
      pricePerKm: '',
      freeKmPerDay: '',
      location: ''
    };
    setBikes([...bikes, newBike]);
  };

  const deleteBike = (id) => {
    const updatedBikes = bikes.filter((bike) => bike.id !== id);
    setBikes(updatedBikes);
  };

  const updateBike = (updatedBike) => {
    const updatedBikes = bikes.map((bike) => (bike.id === updatedBike.id ? updatedBike : bike));
    setBikes(updatedBikes);
    // Placeholder for API call
    // axios.put(`/api/bikes/${updatedBike.id}`, updatedBike);
  };

  return (
    <div className="home">
      {bikes.map((bike) => (
        <Card key={bike.id} bike={bike} onDelete={deleteBike} onUpdate={updateBike} />
      ))}
      <button className="add-button" onClick={addNewBike}>+</button>
    </div>
  );
};

export default Home;

