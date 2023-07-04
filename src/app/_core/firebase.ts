// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE-MyeWMQ3PpWreLGXiYFjS_xGWTeTjec",
  authDomain: "vkstudio-896ec.firebaseapp.com",
  projectId: "vkstudio-896ec",
  storageBucket: "vkstudio-896ec.appspot.com",
  messagingSenderId: "389120227022",
  appId: "1:389120227022:web:c35e233563808fff3d429f",
  measurementId: "G-X3TS4ELYZ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
