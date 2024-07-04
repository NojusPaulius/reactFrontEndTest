import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwnafJzWRdqiSn-Rn493SOqvNUOr3zGZY",
  authDomain: "reactimagegallery-5af7f.firebaseapp.com",
  projectId: "reactimagegallery-5af7f",
  storageBucket: "reactimagegallery-5af7f.appspot.com",
  messagingSenderId: "441126361938",
  appId: "1:441126361938:web:2cad1d29b26b5c07cab88b"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase

export {
    app
}