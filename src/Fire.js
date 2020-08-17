import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyCMqVjwbRWpd1xtQI7fLvJe2gF_I3mCACU",
    authDomain: "mn-colmena.firebaseapp.com",
    databaseURL: "https://mn-colmena.firebaseio.com",
    projectId: "mn-colmena",
    storageBucket: "mn-colmena.appspot.com",
    messagingSenderId: "676779021729",
    appId: "1:676779021729:web:fdc97c82872263530867e0",
    measurementId: "G-3NGMM93400"
};
const fire = firebase.initializeApp(config);
export default fire;