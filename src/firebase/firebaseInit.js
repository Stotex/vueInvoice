import firebase from "firebase/app"
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyB_fwLAMLbpkcxxqKwM_EffZY5WoonG_NQ",
    authDomain: "invoicevue.firebaseapp.com",
    projectId: "invoicevue",
    storageBucket: "invoicevue.appspot.com",
    messagingSenderId: "158230451724",
    appId: "1:158230451724:web:4baf9f6a671d1f759e8029"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();