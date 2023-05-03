
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-analytics.js";

const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Hide the logout button initially
document.getElementById('logout-btn').style.display = "none";

// Show the registration form on click of the register button
document.getElementById('reg-btn').addEventListener('click', function () {
  document.getElementById('register-div').style.display = "inline";
  document.getElementById('login-div').style.display = "none";
});

// Show the login form on click of the login button
document.getElementById('log-btn').addEventListener('click', function () {
  document.getElementById('register-div').style.display = "none";
  document.getElementById('login-div').style.display = "inline";
});

// Register a new user on click of the register button
document.getElementById('register-btn').addEventListener('click', function () {
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Hide the registration form and show the logout button
      document.getElementById('register-div').style.display = "none";
      document.getElementById('logout-btn').style.display = "inline";
      document.getElementById('result-box').textContent = "Account created successfully.";
    })
    .catch((error) => {
      console.log(error);
      document.getElementById('result-box').textContent = "Error creating account.";
    });
});

// Login an existing user on click of the login button
document.getElementById('login-btn').addEventListener('click', function () {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Hide the login form and show the logout button
      document.getElementById('login-div').style.display = "none";
      document.getElementById('logout-btn').style.display = "inline";
      document.getElementById('result-box').textContent = "Login successful.";
    })
    .catch((error) => {
      console.log(error);
      document.getElementById('result-box').textContent = "Invalid email or password.";
    });
});

// Logout the user on click of the logout button
document.getElementById('logout-btn').addEventListener('click', function () {
  signOut(auth)
    .then(() => {
      // Hide the logout button and show the login form
      document.getElementById('logout-btn').style.display = "none";
      document.getElementById('login-div').style.display = "inline";
      // Show the logout message
      document.getElementById('logout-message').style.display = "block";
    })
    .catch((error) => {
      console.log(error);
    });
});
