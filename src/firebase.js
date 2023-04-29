import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCd16jUyQwzwQJwnxMcyRKnCrEWqpzEthM",
    authDomain: "netflix-clone-2afa2.firebaseapp.com",
    projectId: "netflix-clone-2afa2",
    storageBucket: "netflix-clone-2afa2.appspot.com",
    messagingSenderId: "84829324054",
    appId: "1:84829324054:web:efd55fb834f1e9a9cb4637"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); 
const auth = firebase.auth();

export { auth }; 
export default db;

 