import { auth } from './firebase.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Input fields
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signupBtn = document.getElementById('signupBtn');
const loginBtn = document.getElementById('loginBtn');
const message = document.getElementById('message');

// SIGN UP
loginBtn.addEventListener('click', async (e) => {
  e.preventDefault(); // Add this!
  try {
    await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
    message.textContent = "Login successful!";
    window.location.href = "/bonded/role.html";
  } catch (error) {
    message.textContent = error.message;
  }
});



// SIGN IN
loginBtn.addEventListener('click', async () => {
  try {
    await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
    message.textContent = "Login successful!";
    window.location.href = "/bonded/role.html"; // ➡ Redirect to Page 2
  } catch (error) {
    message.textContent = error.message;
  }
});

