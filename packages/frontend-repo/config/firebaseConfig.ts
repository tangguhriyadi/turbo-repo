import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Firestore imports

const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyDv-EVrpQyksGEfAoLckPON4dR8Yb-kil0",
    authDomain: "ebuddy-test-62b94.firebaseapp.com",
    databaseURL:
        "https://ebuddy-test-62b94-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ebuddy-test-62b94",
    storageBucket: "ebuddy-test-62b94.firebasestorage.app",
    messagingSenderId: "596859217751",
    appId: "1:596859217751:web:898f528b1f981ee8058012",
    measurementId: "G-6CBXZYMN7B",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const firestore = getFirestore(app);

export { auth, firestore };
