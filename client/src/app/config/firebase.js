import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDoANVYmWFUY-JU4WQuzbUk6KYp-37PjJI",
    authDomain: "contrivent-db.firebaseapp.com",
    // databaseURL: "https://reventscourse.firebaseio.com",
    projectId: "contrivent-db",
    storageBucket: "contrivent-db.appspot.com",
    messagingSenderId: "421158695702",
    appId: "1:421158695702:web:07c55fb489d32d2bc29637"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;