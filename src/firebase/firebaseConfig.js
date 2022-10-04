import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8KdmWTrb26Nh7wUjGjvhYpxzVj6eK0Kw",
  authDomain: "users-ae0e6.firebaseapp.com",
  projectId: "users-ae0e6",
  storageBucket: "users-ae0e6.appspot.com",
  messagingSenderId: "100977523800",
  appId: "1:100977523800:web:9b4313cc01b47462529e2d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
