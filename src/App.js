import './App.css';
import React, {useState}  from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Bookings from './components/Bookings';
import History from './components/History';
import Available from './components/Available';
import Profile from './components/Profile';
import Header from './components/Header';
import Statistics from './components/Statistics' ;
import { HomeIcon, HistoryIcon, AvailableIcon, BellIcon } from './components/icons/Icon';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import { useEffect } from 'react';
import { messaging } from './firebase';
import { getToken } from 'firebase/messaging';
import { onMessage } from 'firebase/messaging';

function App() {
 
    const requestPermission = async () => {
      console.log('inside requestpermission');
      console.log(Notification.permission);
      try {
         // Request notification permission
    const permission = await Notification.requestPermission();
    
    if (permission === 'granted') {
      console.log('Notification permission granted.');


        const currentToken = await getToken(messaging, {
          vapidKey: 'BG301bBKXbIAfmRiaCKz-SLk5oxvfeyq2xW-daFY8fwr-VhcS5YbLnw7FnaE7cYxV7-kLfbt_aTkrKDio_l4v5c',
        });

        if (currentToken) {
          console.log('Token received:', currentToken);
          // Send the token to your server or save it as needed
        } else {
          console.log('No registration token available.');
        }
      }
      } catch (err) {
        console.error('An error occurred while retrieving token:', err);
      }
    };

  useEffect(() => {
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log('Message received:', payload);
      // Customize how you handle the message, e.g., show a notification or update the UI
    });
  
    return () => {
      unsubscribe();
    };
  }, []);


  const [notificationCount, setNotificationCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNotification = (count) => {
    setNotificationCount(count);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    requestPermission();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app">
        {isLoggedIn ? (
          <>
            <Header />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Bookings" element={<Bookings handleNotification={handleNotification} />} />
                <Route path="/History" element={<History />} />
                <Route path="/Available" element={<Available />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Analytics" element={<Statistics />} />
                <Route path="*" element={<Home />} /> {/* Catch-all route */}
              </Routes>
            </div>
            <div className="footer">
              <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}><HomeIcon />Home</NavLink>
              <NavLink to="/Bookings" className={({ isActive }) => isActive ? 'active' : ''}><BellIcon notificationCount={notificationCount} />Bookings</NavLink>
              <NavLink to="/History" className={({ isActive }) => isActive ? 'active' : ''}><HistoryIcon />History</NavLink>
              <NavLink to="/Available" className={({ isActive }) => isActive ? 'active' : ''}><AvailableIcon />Available</NavLink>
              {/* Add a logout button or link */}
              <button className="mono" onClick={handleLogout}>Logout</button>
            </div>
          </>
        ) : (
          <div className="auth-container">
          <Routes>
            <Route path="/Login" element={<Login onLogin={handleLogin} />} />
            <Route path="/Signup" element={<Signup onSignup={handleLogin} />} />
            <Route path="*" element={<Navigate to="/Login" />} /> {/* Redirect if not logged in */}
          </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;