const firebaseConfig = {
    apiKey: "AIzaSyArueijB4IAo1DHejqOfi7SXKSkNYtdEio",
    authDomain: "rizzler-hw.firebaseapp.com",
    databaseURL: "https://rizzler-hw-default-rtdb.firebaseio.com",
    projectId: "rizzler-hw",
    storageBucket: "rizzler-hw.appspot.com",
    messagingSenderId: "191280065253",
    appId: "1:191280065253:web:f9b248f1116a6998c9420c"
  };

function addUser(){
    username=document.getElementById("user_name").value;
    localStorage.setItem("user_name" , username);
    window.location="index.html";
}