import app from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDpiFvmlwiP6xwsY71pVyEc0f3OsH_aVMM",
    authDomain: "trackster-4bd7b.firebaseapp.com",
    databaseURL: "https://trackster-4bd7b.firebaseio.com",
    projectId: "trackster-4bd7b",
    storageBucket: "trackster-4bd7b.appspot.com",
    messagingSenderId: "321083153230",
    appId: "1:321083153230:web:23fbccc8232f9c2fc21c1f",
    measurementId: "G-VWQMDL1DWQ"
  };

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
export default Firebase;