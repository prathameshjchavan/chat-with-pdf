import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBu65UQannIaEHRKOANsOdyUAs7-V31HPs",
  authDomain: "chat-with-pdf-12f2e.firebaseapp.com",
  projectId: "chat-with-pdf-12f2e",
  storageBucket: "chat-with-pdf-12f2e.appspot.com",
  messagingSenderId: "981705055785",
  appId: "1:981705055785:web:687351dadd7510c8b00638",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
