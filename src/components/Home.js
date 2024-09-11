// src/components/Home.js
import React, { useState } from 'react';
import Card from './Card';
import Modal from './Modal';
import './Home.css';
import SearchBar from './SearchBar'

const Home = () => {

  const initialItems = [
    {
      id: 1,
      itemName: 'Yamaha R15',
      itemNo: 'MH12AB1234',
      pricePerDay: '500',
      pricePerKm: '5',
      freeKmPerDay: '100',
      location: 'Pune'
    },
    {
    id: 2,
      itemName: 'Himalayan',
      itemNo: 'KL11AS6636',
      pricePerDay: '100',
      pricePerKm: '4',
      freeKmPerDay: '100',
      location: 'kozhikode'
    },
    {
      id: 3,
        itemName: 'Exter',
        itemNo: 'KL85B7604',
        pricePerDay: '1000',
        pricePerKm: '10',
        freeKmPerDay: '100',
        location: 'Ernakulam'
      }
  ];

  const [items, setItems] = useState(initialItems);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    itemName: '',
    itemNo: '',
    pricePerDay: '',
    pricePerKm: '',
    freeKmPerDay: '',
    location: ''
  });
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  let filteredBookings = items.filter(item => 
    item.itemNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleShowModal = () => {
    setFormData({
      id: items.length + 1,
      itemName: '',
      itemNo: '',
      pricePerDay: '',
      pricePerKm: '',
      freeKmPerDay: '',
      location: ''
    });
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, formData]);
    handleCloseModal();
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const updateItem = (updatedItem) => {
    const updatedItems = items.map((item) => (item.id === updatedItem.id ? updatedItem : item));
    setItems(updatedItems);
    // Placeholder for API call
    // axios.put(`/api/bikes/${updatedBike.id}`, updatedBike);
  };

  return (
    <div>
      <SearchBar value={searchQuery} onChange={handleSearchChange} />
    <div className="home">
    <div className="field"><span className='span-style-f'>Total Products</span><span className='span-style-l'>100</span></div>
      <div className="card-container">
        {filteredBookings.map((item) => (
          <Card key={item.id} item={item} onDelete={deleteItem} onUpdate={updateItem} />
        ))}
      </div>
      <button className="add-button" onClick={handleShowModal}>+</button>
      <Modal
        show={showModal}
        handleClose={handleCloseModal}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
      />
      
    </div>
    </div>
  );
};

export default Home;
