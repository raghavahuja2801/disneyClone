import firebase from 'firebase/compat/app';
import { getStorage } from "firebase/storage";
import { getAuth,  GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAC_1G6peaSR_0lh_qT-PBA-3aV3rXaWeM",
    authDomain: "disney-efe31.firebaseapp.com",
    projectId: "disney-efe31",
    storageBucket: "disney-efe31.appspot.com",
    messagingSenderId: "97217192108",
    appId: "1:97217192108:web:2d8b950a0d2e0bdfdc7f09",
    measurementId: "G-KFQP8Z5S48"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const storage = getStorage(firebaseApp);
  



export {auth, provider, storage };
export default db;

  