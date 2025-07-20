function loginWithGmail() {
  const gmail = document.getElementById("login-gmail").value;
  const password = document.getElementById("login-password").value;
  const mobile = document.getElementById("login-mobile").value;
  const dob = document.getElementById("login-dob").value;
  const gender = document.getElementById("login-gender").value;

  const errorDiv = document.getElementById("login-error");
  errorDiv.innerText = "";

  if (!gmail || !password || !mobile || !dob || !gender) {
    errorDiv.innerText = "Please fill in all fields.";
    return;
  }

  document.getElementById("login-section").classList.add("hidden");
  document.getElementById("homepage-section").classList.remove("hidden");

  document.getElementById("home-gmail").innerText = gmail;
  document.getElementById("home-mobile").innerText = mobile;
  document.getElementById("home-dob").innerText = dob;
  document.getElementById("home-gender").innerText = gender;
}

function logout() {
  document.getElementById("homepage-section").classList.add("hidden");
  document.getElementById("login-section").classList.remove("hidden");

  document.getElementById("login-gmail").value = "";
  document.getElementById("login-password").value = "";
  document.getElementById("login-mobile").value = "";
  document.getElementById("login-dob").value = "";
  document.getElementById("login-gender").value = "";
}
