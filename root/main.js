import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import {
  getDatabase,
  set,
  ref,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { WriteUser } from "./WriteUser.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUZ7vcUyZVL63uU9Db_R82yt4IgbC3nvs",
  authDomain: "managershoes-27f92.firebaseapp.com",
  databaseURL:
    "https://managershoes-27f92-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "managershoes-27f92",
  storageBucket: "managershoes-27f92.appspot.com",
  messagingSenderId: "155257842470",
  appId: "1:155257842470:web:1531be5dba455adb552fe7",
  measurementId: "G-46ZX8VZX1G",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

const dbrt = getDatabase(app);
const refDb = ref(dbrt);
const form = document.querySelector(".form_info");
const inputSearch = document.querySelector(".search_user");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  writeUserData(e.target);
});

const writeUserData = (form) => {
  const user = {
    id: form.id.value,
    name: form.fullName.value,
    email: form.email.value,
    phoneNumber: form.phoneNumber.value,
    age: form.age.value,
  };

  try {
    set(ref(dbrt, `user/${user.id}`), user);
    // const userForm = new WriteUser();
    // userForm.WriteUser(user, dbrt, ref, set);

    alert("Success");

    form.id.value = "";
    form.fullName.value = "";
    form.email.value = "";
    form.phoneNumber.value = "";
    form.age.value = "";
  } catch (error) {
    alert(error);
  }
};

const readUserData = async () => {
  try {
    const snapshot = await get(refDb, "user");
    if (snapshot.exists()) {
      const { user } = snapshot.val();
      console.log(user);
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.log(error);
  }
};

inputSearch.addEventListener("change", (e) => {
  const id = e.target.value;
  try {
    get(child(refDb, `user/${id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          alert("Not found");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {}
});
