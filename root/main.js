import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

export const firebaseConfig = {
  apiKey: "AIzaSyAUZ7vcUyZVL63uU9Db_R82yt4IgbC3nvs",
  authDomain: "managershoes-27f92.firebaseapp.com",
  projectId: "managershoes-27f92",
  storageBucket: "managershoes-27f92.appspot.com",
  messagingSenderId: "155257842470",
  appId: "1:155257842470:web:1531be5dba455adb552fe7",
  measurementId: "G-46ZX8VZX1G",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
