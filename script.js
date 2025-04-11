const loginForm = document.getElementById("loginForm");
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");
const usernameInput = document.getElementById("username");

// Show/hide password
togglePassword.addEventListener("click", () => {
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
  togglePassword.textContent = type === "password" ? "👁️" : "🙈";
});

// Capture and show login details in console
loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page refresh

  const username = usernameInput.value;
  const password = passwordInput.value;

  console.log("User tried to log in:");
  console.log("Username:", username);
  console.log("Password:", password);

  // Fake login feedback
  alert("Account not found. Check the console to see submitted details.");
});

