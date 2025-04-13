
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAfmpbDFtVf1311P36NfSqo1O7WHeP-LZQ",
  authDomain: "sipora-island.firebaseapp.com",
  projectId: "sipora-island",
  storageBucket: "sipora-island.appspot.com",
  messagingSenderId: "824797102342",
  appId: "1:824797102342:web:50de3411232e2962e55e87",
  measurementId: "G-DBS1W3YGJ"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

export { app, database, storage };
