import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBaIlwOTwZM1dTXdyWiRSBFkk_tUwFuEJA",
    authDomain: "chekov-dl.firebaseapp.com",
    projectId: "chekov-dl",
    storageBucket: "chekov-dl.appspot.com",
    messagingSenderId: "148888952125",
    appId: "1:148888952125:web:ee12096ff5df55a6683954"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app); // Need app inside for react-native
  