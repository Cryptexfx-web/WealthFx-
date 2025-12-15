const API = "https://YOUR-BACKEND-URL/api";

function authHeaders() {
  return {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("token")
  };
}
