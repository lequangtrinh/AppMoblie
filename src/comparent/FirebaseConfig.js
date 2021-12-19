import * as firebase from 'firebase';
import "firebase/firestore"
var firebaseConfig = {
  apiKey: "AIzaSyAMJl6DDzLoIx5jPgDuBjjeonXME2hYauw",
  authDomain: "fir-app-130e2.firebaseapp.com",
  databaseURL: "https://fir-app-130e2-default-rtdb.firebaseio.com",
  projectId: "fir-app-130e2",
  storageBucket: "",
  messagingSenderId: "566839097313",
  appId: "1:566839097313:web:cbeb80c85390f9b48304a0",
  measurementId: "G-5ZKP6H0GNF"
  };
  let firebaseApp='';
  if(firebase.apps.length == 1){
    console.log(firebase.name);
    firebase.app()  
  }
  else
  {
    firebaseApp=firebase.initializeApp(firebaseConfig)
  }
  export {firebaseApp};
 

