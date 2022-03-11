import firebase from "firebase/app";
import "firebase/auth";

const config = {
    apiKey : process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "auth-react-633e3.firebaseapp.com",
    projectId: "auth-react-633e3",
    storageBucket: "auth-react-633e3.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING,
    appId: process.env.REACT_APP_FIREBASE_API_ID
}

console.log(config)

const app = firebase.initializeApp(config);

export const auth = app.auth();
export default app;