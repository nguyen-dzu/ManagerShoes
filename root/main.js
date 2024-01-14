import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import {
  getDatabase,
  set,
  ref,
  get,
  child,
  update,
  remove,
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

const list_name_user = document.querySelector(".list_name_user");
const body_content_table = document.querySelector(".body_content_table");

const editUser = (id) => {
  set(ref(dbrt, "user/" + id), {
    name: "Tran Van A",
    email: "a@gmail.com",
    phone_number: "0123456789",
    age: 20,
    id: id,
  })
    .then(() => {
      console.log("Edit succeeded.");
      window.location.reload();
    })
    .catch((error) => {
      console.log("Edit failed: " + error.message);
    });
};

const deleteUser = (id) => {
  remove(ref(dbrt, `user/${id}`))
    .then(() => {
      console.log("Remove succeeded.");
      window.location.reload();
    })
    .catch((error) => {
      console.log("Remove failed: " + error.message);
    });
};

const getListUser = () => {
  get(child(refDb, `user/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const listUser = Object.values(data);
        listUser.forEach((item) => {
          const valueFullName = document.createElement("td");
          const fullName = document.createElement("tr");

          const bodyContentTable = document.createElement("tr");
          const valueEmail = document.createElement("td");
          const valuePhone = document.createElement("td");
          const valueAge = document.createElement("td");
          const containerButton = document.createElement("td");

          containerButton.style =
            "display: flex; justify-content: space-around; align-items: center;";
          const btnDelete = document.createElement("button");
          const btnEdit = document.createElement("button");

          btnEdit.addEventListener("click", () => editUser(item.id));

          btnDelete.addEventListener("click", () => deleteUser(item.id));

          btnDelete.innerHTML = "Delete";
          btnEdit.innerHTML = "Edit";

          valueFullName.innerHTML = item.name;
          valueEmail.innerHTML = item.email;
          valuePhone.innerHTML = item.phone_number;
          valueAge.innerHTML = item.age;

          fullName.appendChild(valueFullName);

          containerButton.appendChild(btnEdit);
          containerButton.appendChild(btnDelete);

          bodyContentTable.appendChild(valueEmail);
          bodyContentTable.appendChild(valuePhone);
          bodyContentTable.appendChild(valueAge);
          bodyContentTable.appendChild(containerButton);

          body_content_table.appendChild(bodyContentTable);
          list_name_user.appendChild(fullName);
        });
      } else {
        console.log("Noßdata available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
getListUser();
