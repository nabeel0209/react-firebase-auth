import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import type { FirebaseApp } from "firebase/app";
import type { Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGgOg_JkvniESdHG4wjAB_nyKnOmhxDaY",
  authDomain: "react-fb-auth-23821.firebaseapp.com",
  projectId: "react-fb-auth-23821",
  storageBucket: "react-fb-auth-23821.firebasestorage.app",
  messagingSenderId: "834455300767",
  appId: "1:834455300767:web:06aeb794ea456f2b7350aa",
  measurementId: "G-YHLGM5QZX6",
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);

export { auth, app };
