// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: 'API_KEY',
  authDomain: 'PROJECT_ID.firebaseapp.com',
  projectId: 'PROJECT_ID',
  storageBucket: 'PROJECT_ID.appspot.com',
  messagingSenderId: 'SENDER_ID',
  appId: 'APP_ID',
  databaseURL: 'https://PROJECT_ID.firebaseio.com'
};
firebase.initializeApp(firebaseConfig);