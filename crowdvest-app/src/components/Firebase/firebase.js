import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCdR4il_KY8YyExnqiNW57Fmm5tl-qmJHo",
    authDomain: "https://crowdvest.firebaseapp.com/",
    databaseURL: "",
    projectId: "crowdvest-84514",
    storageBucket: '',
    messagingSenderId: '',
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();

<<<<<<< HEAD
=======
      this.db = app.database();

>>>>>>> aaf05a69afb26a94dc25358457424d4aefb92d41
      this.googleProvider = new app.auth.GoogleAuthProvider();
    }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);

<<<<<<< HEAD

=======
>>>>>>> aaf05a69afb26a94dc25358457424d4aefb92d41
  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
  }

  
  
  export default Firebase;