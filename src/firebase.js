// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyCowqgU1-hISuBBjkfVdfFjC1WDqcmfBto",
    authDomain: "vendor-app-42a3b.firebaseapp.com",
    projectId: "vendor-app-42a3b",
    storageBucket: "vendor-app-42a3b.appspot.com",
    messagingSenderId: "684701750494",
    appId: "1:684701750494:web:82f17903999cb4c174de4f",
    measurementId: "G-SHK23JZDBH"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Messaging
const messaging = getMessaging(app);

export { messaging };
