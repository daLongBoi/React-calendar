import { initializeApp } from "firebase/app";
import { getAuth, EmailAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCLBpWHQHCZdEXA9BQwueRek0R_K5NwmW4",
  authDomain: "venuCCe-room-calendar.firebaseapp.com",
  projectId: "venue-room-calendar",
  storageBucket: "venue-room-calendar.appspot.com",
  messagingSenderId: "801152282682",
  appId: "1:801152282682:web:365128d696fc52212ac503",
  measurementId: "G-4QN1XFGB2R",
  databaseURL:
    "https://venue-room-calendar-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export { app, EmailAuthProvider, database }; // Export EmailAuthProvider
