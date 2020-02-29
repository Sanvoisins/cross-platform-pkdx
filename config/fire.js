import firebase from 'firebase';
const config={
    apiKey: "AIzaSyCPBeLY5TJemM4yh-OfCL-evPjsnZbFgYo",
    authDomain: "cross-platform-pkdx-f683c.firebaseapp.com",
    databaseURL: "https://cross-platform-pkdx-f683c.firebaseio.com",
    projectId: "cross-platform-pkdx-f683c",
    storageBucket: "cross-platform-pkdx-f683c.appspot.com",
    messagingSenderId: "727130189539",
    appId: "1:727130189539:web:69a86d56e26fc35de45fd6"
}
const Firebase = firebase.initializeApp(config);
export default Firebase;