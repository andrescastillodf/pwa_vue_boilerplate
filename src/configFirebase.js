import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/messaging";

const config = {
  apiKey: "AIzaSyAxFnu8E3YOr2JudHAA1JnYyo-ourZhl8o",
  authDomain: "pwa-sipay-products.firebaseapp.com",
  databaseURL: "https://pwa-sipay-products.firebaseio.com",
  projectId: "pwa-sipay-products",
  storageBucket: "pwa-sipay-products.appspot.com",
  messagingSenderId: "1001336579440",
  appId: "1:1001336579440:web:1dd5df0e6c40463435dbb5",
  measurementId: "G-CJCPRDYNVR"
};

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

// Disable deprecated features
db.settings({});

db.enablePersistence({ synchronizeTabs: true });

export default {
  db
};
