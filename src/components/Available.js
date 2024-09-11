import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Available.module.css';
import SearchIcon from './SearchIcon';

const Available = () => {
  const [items, setItems] = useState([
    { "id": "KL11AS6636", name: "Unicorn", unavailableDates: [] },
    { "id": "KL85B9607", name: "Himalayan", unavailableDates: [] },
    { "id": "KL73B2307", name: "Highness", unavailableDates: [] },
    { "id": "KL07B8007", name: "Exter", unavailableDates: [] },
    // Add more bikes as needed
  ]);
  
  const [startDate, setStartDate] = useState(new Date());

  const toggleBlockBike = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, blocked: !item.blocked } : item
      )
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles['search-bar']}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy/MM/dd"
        />
        <SearchIcon className="search-icon" />
      </div>
      <div  className={styles['block-container']}>
      <div className={styles['card-container']}>
        {items.map((item) => (
          <div
            key={item.id}
            className={`${styles.card} ${item.blocked ? styles.blocked : ''}`}
          >
            <div className={styles['decription']}>{item.name.padEnd(14,' ')} - #{item.id}</div>
            <button
              className={`${styles['block-button']} ${item.blocked ? styles['unblock-button'] : ''}`}
              onClick={() => toggleBlockBike(item.id)}
            >
              {item.blocked ? 'Unblock' : 'Block'}
            </button>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Available;
