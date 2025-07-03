const firebaseConfig = {
  apiKey: "AIzaSyEXAMPLEKEY",
  authDomain: "your-app-id.firebaseapp.com",
  projectId: "your-app-id",
  storageBucket: "your-app-id.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdefg123456"
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
