document.getElementById("btn-login").addEventListener("click", function () {
  //get the email from email field
  //note: use .value to get the input from input field
  const getEmail = document.getElementById("login-email");
  const email = getEmail.value;
  //get password value
  const getPassword = document.getElementById("login-password");
  const password = getPassword.value;

  //DANGER: this verification method is only for test purpose.

  if (email === "gorib@manush.com" && password === "test") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Details");
  }
});
