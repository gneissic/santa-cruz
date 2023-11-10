import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCFI7oaiqePsTCwIMzN6kC0VH8bO3zhwCg",
  authDomain: "santa-cruz-64b2d.firebaseapp.com",
  databaseURL: "https://santa-cruz-64b2d-default-rtdb.firebaseio.com",
  projectId: "santa-cruz-64b2d",
  storageBucket: "santa-cruz-64b2d.appspot.com",
  messagingSenderId: "575873733117",
  appId: "1:575873733117:web:22eca25b1ec6a831468994",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };
