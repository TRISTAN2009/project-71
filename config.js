import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCO6zKjKcJ8MVW2teBo2OttUUkAaozam7Q",
    authDomain: "complaint-forum-8cef6.firebaseapp.com",
    projectId: "complaint-forum-8cef6",
    storageBucket: "complaint-forum-8cef6.appspot.com",
    messagingSenderId: "114324224881",
    appId: "1:114324224881:web:2b4cc0601a3b025ee754d0"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
