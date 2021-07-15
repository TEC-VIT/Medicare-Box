import firebase from "firebase/app"
import "firebase/auth"

const app  = firebase.initializeApp({
    apiKey: "AIzaSyCdoiR98PiYs4D-85cNktoGkqyyxEABEBc",
    authDomain: "medicare-box.firebaseapp.com",
    databaseURL: "https://medicare-box-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "medicare-box",
    storageBucket: "medicare-box.appspot.com",
    messagingSenderId: "866158574923",
    appId: "1:866158574923:web:c1cd16e18960c045d3fcce",
    measurementId: "G-9B9B131KG8"
});

export const auth = app.auth()
export default app