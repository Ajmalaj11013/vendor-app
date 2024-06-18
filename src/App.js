
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Screen1 from './components/Bookings';
import Screen2 from './components/History';
import Screen3 from './components/Available';
import Screen4 from './components/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/screen1" element={<Screen1 />} />
            <Route path="/screen2" element={<Screen2 />} />
            <Route path="/screen3" element={<Screen3 />} />
            <Route path="/screen4" element={<Screen4 />} />
          </Routes>
        </div>
        <div className="footer">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/screen1" className={({ isActive }) => isActive ? 'active' : ''}>Bookings</NavLink>
          <NavLink to="/screen2" className={({ isActive }) => isActive ? 'active' : ''}>History</NavLink>
          <NavLink to="/screen3" className={({ isActive }) => isActive ? 'active' : ''}>Available</NavLink>
          <NavLink to="/screen4" className={({ isActive }) => isActive ? 'active' : ''}>Profile</NavLink>
        </div>
      </div>
    </Router>
  );
}

export default App;
