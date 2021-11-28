import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9efDFy0l-Hqx5g8oEXwO46us3tzlm0-w",
  authDomain: "cruiz-portfolio.firebaseapp.com",
  projectId: "cruiz-portfolio",
  storageBucket: "cruiz-portfolio.appspot.com",
  messagingSenderId: "400175060463",
  appId: "1:400175060463:web:876e29c06947329bfad21a",
};

const firebase = initializeApp(firebaseConfig);
const storage = getStorage();
const db = getFirestore(firebase);

export { firebase, storage, db };
