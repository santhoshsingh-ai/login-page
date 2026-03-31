let isLogin = true;

function toggleMode() {
  isLogin = !isLogin;

  document.getElementById("title").innerText = isLogin ? "Login" : "Sign Up";
  document.querySelector("button").innerText = isLogin ? "Login" : "Sign Up";

  document.getElementById("message").innerText = "";

  document.getElementById("toggleText").innerHTML = isLogin
    ? `Don't have an account? <span onclick="toggleMode()">Sign up</span>`
    : `Already have an account? <span onclick="toggleMode()">Login</span>`;
}

function handleAuth() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let message = document.getElementById("message");

  if (!username || !password) {
    message.style.color = "red";
    message.innerText = "Fill all fields!";
    return;
  }

  if (isLogin) {
    let storedUser = localStorage.getItem("user");
    let storedPass = localStorage.getItem("pass");

    if (username === storedUser && password === storedPass) {
      message.style.color = "green";
      message.innerText = "Login Successful ✅";
    } else {
      message.style.color = "red";
      message.innerText = "Invalid Credentials ❌";
    }
  } else {
    localStorage.setItem("user", username);
    localStorage.setItem("pass", password);

    message.style.color = "green";
    message.innerText = "Signup Successful 🎉";
    toggleMode();
  }
}