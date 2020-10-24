import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBAR49U_opW0WN2OAlNh4aWSJ8n_VBFBec",
    authDomain: "react-todoapp-cdf49.firebaseapp.com",
    databaseURL: "https://react-todoapp-cdf49.firebaseio.com",
    projectId: "react-todoapp-cdf49",
    storageBucket: "react-todoapp-cdf49.appspot.com",
    messagingSenderId: "883785932095",
    appId: "1:883785932095:web:d32ce7e55f43a68403878a",
    measurementId: "G-KB0GQXD8PD"
});
const db = firebaseApp.firestore();
export default db;