import { app, firebaseConfig, analytics } from "../../../main.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const db = getFirestore(app);
const usersCollectionRef = collection(db, "User");

console.log(usersCollectionRef, ">>>");
const getUser = async () => {
  const querySnapsot = await getDocs(collection(db, "User"));
  console.log(querySnapsot);
  querySnapsot.docs.map((item, index) => {
    console.log(item.data());
  });
};

// write
const date = new Date();
const addUser = async () => {
  const refDoc = await addDoc(collection(db, "User"), {
    age: 13,
    createAt: date.toUTCString(),
    firstName: "String_1",
    lastName: "String_2",
    student: false,
  });
  getUser();
  alert("add User success");
};

const btnAddUsser = document.querySelector(".addUsser");

btnAddUsser.addEventListener("click", addUser);
