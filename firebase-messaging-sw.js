// public/firebase-messaging-sw.js

/* eslint-disable no-undef */

// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging.js');

// Your Firebase configuration object
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
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message:', payload);

  const notificationTitle = payload.notification.title || 'Notification';
  const notificationOptions = {
    body: payload.notification.body || 'You have a new message.',
    icon: '/vendor-app/logo192.png', // Path to your app icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
