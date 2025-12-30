// ...existing code...
// === AUTH LOGIC ===

// Sign up
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;
    const email = document.getElementById("signupEmail").value;
    localStorage.setItem("sustainhubUser", JSON.stringify({ username, password, email }));
    alert("Account created! Please log in.");
    window.location.href = "index.html";
  });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const email = document.getElementById("loginEmail").value;

    const user = JSON.parse(localStorage.getItem("sustainhubUser"));

    if (user && username === user.username && password === user.password && email === user.email) {
      localStorage.setItem("loggedIn", "true");
      alert("Login successful!");
      window.location.href = "indexB.html";
    } else {
      alert("Invalid credentials!");
    }
  });
}

// Protect only the logged-in page (indexB.html)
// Redirect unauthenticated visitors to the login page.
// This avoids redirecting from index.html to itself.
if (window.location.pathname.endsWith('indexB.html')) {
  const loggedIn = localStorage.getItem("loggedIn");
  if (loggedIn !== "true") {
    window.location.href = "index.html";
  }
}

// Logout
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

// === SustainHub logic (posting ideas, comments, etc.) ===
// ...existing code...