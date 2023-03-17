import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0McYxVQ2ihMOhZ_IY8h8ws5hZd7jOcPI",
  authDomain: "yashfinalotp.firebaseapp.com",
  projectId: "yashfinalotp",
  storageBucket: "yashfinalotp.appspot.com",
  messagingSenderId: "612363365686",
  appId: "1:612363365686:web:e1781195e94e0ebeb61797",
  measurementId: "G-H3SCYK8FPP",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
