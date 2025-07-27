function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  if (token) {
    document.getElementById("delete-token").style.display = "block";
    document.getElementById("login-link").style.display = "none";
    document.getElementById("register-link").style.display = "none";
    document.getElementById("user").style.display = "block";

    document.getElementById("delete-token").addEventListener("click", () => {
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      alert("Token deleted");
      window.location.href = "/login.html"; // Redirect to login page
    });

    const payload = parseJwt(token);
    // Fetch user data from the server
    (async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/users/${payload.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const user = await res.json();
        console.log("User object from backend:", user);
        if (user && user.user && user.user.username) {
          document.getElementById("user-link").innerText = user.user.username;
        } else {
          document.getElementById("user-link").innerText = JSON.stringify(user);
        }
        document.getElementById("user-link").href = `/user/${payload.id}`;
        console.log("User data fetched:", user);
      } catch (error) {
        console.error("Error fetching user data:", error);
        document.getElementById("user-link").innerText = "User";
        document.getElementById("user-link").href = "/login.html";
      }
    })();
  } else {
    document.getElementById("delete-token").style.display = "none";
  }
});

console.log("Frontend Search Script Loaded");
