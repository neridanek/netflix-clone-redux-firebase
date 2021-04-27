import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD2k2pNb7t2xPb84VDORok2v9XxcEwboOU",
    authDomain: "netflix-clone-live.firebaseapp.com",
    projectId: "netflix-clone-live",
    storageBucket: "netflix-clone-live.appspot.com",
    messagingSenderId: "922872110966",
    appId: "1:922872110966:web:32273b2ca20b2bed5ae457"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  const db = firebaseApp.firestore()

  export {auth}
  export default db ;
