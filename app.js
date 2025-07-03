// Firebase App (the core Firebase SDK) is always required and must be listed first
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-LL4DWLgtQfNrZQceF03TbgZz1pCixzo",
  authDomain: "shri-thakur-ji-jobs.firebaseapp.com",
  projectId: "shri-thakur-ji-jobs",
  storageBucket: "shri-thakur-ji-jobs.firebasestorage.app",
  messagingSenderId: "670566311564",
  appId: "1:670566311564:web:b98e5e7c2639597e3ffda9",
  measurementId: "G-QRFM4X1WCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Handle Register
document.getElementById("register-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Registration successful!");
    })
    .catch((error) => {
      alert("Registration failed: " + error.message);
    });
});

// Handle Login
document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});
