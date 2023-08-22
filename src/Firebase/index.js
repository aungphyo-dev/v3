import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZwS5m1DqoU6S5PXI8mRCeoENR_TxosVs",
    authDomain: "typle-edc94.firebaseapp.com",
    projectId: "typle-edc94",
    storageBucket: "typle-edc94.appspot.com",
    messagingSenderId: "693999171349",
    appId: "1:693999171349:web:083427e3e5c3c3ab5e1b1c",
    measurementId: "G-FF2QEKWHG0"
};
const app = initializeApp(firebaseConfig);
let db = getFirestore(app)
const auth = getAuth(app)
const storage =getStorage(app)
export {db,auth,storage}