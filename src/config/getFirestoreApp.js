import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBzYXE6yg2ITwfVbLtRuiScSzYAAJpgFWM",
    authDomain: "dolcha-f24af.firebaseapp.com",
    projectId: "dolcha-f24af",
    storageBucket: "dolcha-f24af.appspot.com",
    messagingSenderId: "166612981631",
    appId: "1:166612981631:web:11e7c3624128b1e45c6c4a"
};

const app = initializeApp(firebaseConfig);

function getFirestoreApp(){
    return app
}
export default getFirestoreApp;