import firebase from 'firebase'


const config = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "forex-app-c1e26.firebaseapp.com",
    databaseURL: "https://forex-app-c1e26.firebaseio.com",
    projectId: "forex-app-c1e26",
    storageBucket: "forex-app-c1e26.appspot.com",
    messagingSenderId: "196207044321",
    appId: "1:196207044321:web:2050f662434f9ecb9779a0"
  };


firebase.initializeApp(config);

export const provider=new firebase.auth.GoogleAuthProvider();
export const auth= firebase.auth();

export default firebase;