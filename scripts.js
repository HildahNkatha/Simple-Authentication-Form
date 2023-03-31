
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js";



import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-analytics.js";


const firebaseConfig = {
  apiKey: "AIzaSyCpNj9ZvaFMHG_P4G7wTIukl2QrrTFAAXQ",
  authDomain: "simple-auth-f8b33.firebaseapp.com",
  projectId: "simple-auth-f8b33",
  storageBucket: "simple-auth-f8b33.appspot.com",
  messagingSenderId: "283313934371",
  appId: "1:283313934371:web:6277309381b2335a0e6196",
  measurementId: "G-JJK1SSYKYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);




document.getElementById('reg-btn').addEventListener('click', function(){

    document.getElementById('register-div').style.display="inline";
    document.getElementById('login-div').style.display="none";
    


});


document.getElementById('log-btn').addEventListener('click', function(){
 document.getElementById('register-div').style.display="none";
    document.getElementById('login-div').style.display="inline";
    


});


document.getElementById('login-btn').addEventListener('click', function(){
    const  loginEmail= document.getElementById("login-email").value;
    const loginPaswword= document.getElementById("login-password").value;


    signInWithEmailAndPassword(auth, loginEmail, loginPaswword)
  .then((userCredential) => {

    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
    document.getElementById('login-div').style.display="none";
    document.getElementById("result").innerHTML="Welcome Back ! <br>"+loginEmail +"Login Successfully";

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
    document.getElementById('login-div').style.display="none";
    document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

  });

});

  document.getElementById('register-btn').addEventListener('click', function(){
    const  registerEmail= document.getElementById("register-email").value;
    const registerPaswword= document.getElementById("register-password").value;


    createUserWithEmailAndPassword(auth, registerEmail, registerPaswword)
  .then((userCredential) => {

    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
    document.getElementById('register-div').style.display="none";
    document.getElementById("result").innerHTML="Welcome Back ! <br>"+registerEmail +"Registrater Successfully";

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
    document.getElementById('register-div').style.display="none";
    document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

  });

});
document.getElementById('log-out-btn').addEventListener('click', function(){

    signOut(auth).then(() => {
        document.getElementById("result-box").style.display="none";
        document.getElementById('login-div').style.display="inline";

      }).catch((error) => {
        document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

      });




});
