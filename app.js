// Replace these keys with your actual Firebase config
const firebaseConfig = {
  apiKey: "YOUR-API-KEY",
  authDomain: "YOUR-AUTH-DOMAIN",
  projectId: "YOUR-PROJECT-ID",
  storageBucket: "YOUR-STORAGE",
  messagingSenderId: "YOUR-SENDER-ID",
  appId: "YOUR-APP-ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

function showLogin() {
  document.getElementById("auth-title").innerText = "Login";
  document.getElementById("auth-section").style.display = "block";
}
function showRegister() {
  document.getElementById("auth-title").innerText = "Register";
  document.getElementById("auth-section").style.display = "block";
}
function handleAuth() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const isLogin = document.getElementById("auth-title").innerText === "Login";

  if (isLogin) {
    auth.signInWithEmailAndPassword(email, pass)
      .then(() => alert("Logged in"))
      .catch(err => alert(err.message));
  } else {
    auth.createUserWithEmailAndPassword(email, pass)
      .then(() => alert("Registered"))
      .catch(err => alert(err.message));
  }
}

function fetchJobs() {
  const container = document.getElementById("jobs-container");
  container.innerHTML = "<p>No jobs yet. Connect to Firebase.</p>";
}
window.onload = fetchJobs;
