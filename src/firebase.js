import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
          apiKey: "AIzaSyAxLg8S4N-cljDBvdmTh6T52IloBqhujMI",
          authDomain: "facebook-clone-8a1b7.firebaseapp.com",
          projectId: "facebook-clone-8a1b7",
          storageBucket: "facebook-clone-8a1b7.appspot.com",
          messagingSenderId: "12264262829",
          appId: "1:12264262829:web:88a079f321c4b55784ca24",
          measurementId: "G-FSVLXRYYXK"
        };

//app connection // Initialize Firebase
        const firebaseApp = firebase.initializeApp(firebaseConfig);
                
        //connect the app to the firebase firestore
        const db = firebaseApp.firestore()

        //add google auth
        const auth = firebase.auth()

        //get a provider to work with app - we are asking firebase that we want google login service
        
        const provider = new firebase.auth.GoogleAuthProvider()


        export{auth, provider}
        export default db

