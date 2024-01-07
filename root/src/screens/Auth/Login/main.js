import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { app } from "../../../../main.js";

// biến html

const eventFormLogin = document.querySelector(".formLogin");
const inputEmail = document.querySelector(".inputEmail");
const inputPassword = document.querySelector(".inputPassword");

const auth = getAuth(app);

console.log("auth", auth);

eventFormLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  //   createUserWithEmailAndPassword(auth, inputEmail.value, inputPassword.value)
  //     .then((userCredential) => {
  //       const user = userCredential.user;

  //       alert("message success");
  //       console.log(user);

  //       localStorage.setItem("accessToken", JSON.stringify(user.accessToken));
  //     })
  //     .catch((error) => {
  //       //   console.log(error.code, error.message);
  //       if (error.code == "auth/email-already-in-use") {
  //         alert("user đã tồn tại");
  //       }
  //       //   viết component toast
  //     });

  signInWithEmailAndPassword(auth, inputEmail.value, inputPassword.value)
    .then((userCredential) => {
      //   console.log(userCredential.accessToken);
      //   localStorage.setItem("accessToken", JSON.stringify(user.accessToken));

      if (localStorage.getItem("accessToken") == null) {
        localStorage.setItem(
          "accessToken",
          JSON.stringify(userCredential.accessToken)
        );
      } else {
        localStorage.removeItem("accessToken");
        localStorage.setItem(
          "accessToken",
          JSON.stringify(userCredential.accessToken)
        );
      }

      window.location.href = "../../Home/index.html";
    })
    .catch((error) => console.log(error));
});
