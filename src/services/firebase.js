'use client'
import { initializeApp } from "firebase/app";
import {
  getAnalytics,
  logEvent,
} from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAIer5sS5NGsK_kHWUfKx3xv_sDXYggGqY",
  authDomain: "adairesolutions.firebaseapp.com",
  projectId: "adairesolutions",
  storageBucket: "adairesolutions.appspot.com",
  messagingSenderId: "216377929840",
  appId: "1:216377929840:web:2786d6c1420d86c2fc84b5",
  measurementId: "G-WVVRFRWWCY"
};

const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
logEvent(analytics, 'notification_received');