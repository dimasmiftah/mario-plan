import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDU_N_ohgQDhchMD3rehr_oOB0QuYIc8GE",
  authDomain: "marioplan-7ce64.firebaseapp.com",
  databaseURL: "https://marioplan-7ce64.firebaseio.com",
  projectId: "marioplan-7ce64",
  storageBucket: "marioplan-7ce64.appspot.com",
  messagingSenderId: "840175355773",
  appId: "1:840175355773:web:f9b7d2722d4008e97e2e14",
  measurementId: "G-GE4J4D8PB3"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase