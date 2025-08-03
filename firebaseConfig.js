import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase Config
export const firebaseConfig = {
  apiKey: "AIzaSyAeJvFvZVfjLDSqkj9RpQgG-ILR5SmwSXU",
  authDomain: "internshala-project-10957.firebaseapp.com",
  projectId: "internshala-project-10957",
  storageBucket: "internshala-project-10957.firebasestorage.app",
  messagingSenderId: "923573431338",
  appId: "1:923573431338:web:231e63e180d24762bb6753",
  measurementId: "G-6YKPEDMLGJ"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};
