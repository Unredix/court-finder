console.log("Frontend Search Script Loaded");

document.getElementById("delete-token").addEventListener("click", () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  alert("Token deleted");
  window.location.href = "/login.html"; // Redirect to login page
});
