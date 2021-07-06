import firebase from "firebase"
import "firebase/auth"

const app1  = firebase.initializeApp({
    apiKey: "AIzaSyCdoiR98PiYs4D-85cNktoGkqyyxEABEBc",
    authDomain: "medicare-box.firebaseapp.com",
    projectId: "medicare-box",
    storageBucket: "medicare-box.appspot.com",
    messagingSenderId: "866158574923",
    appId: "1:866158574923:web:c1cd16e18960c045d3fcce",
    measurementId: "G-9B9B131KG8"
});

export const auth = app1.auth()
export default app1