function validate() {
  let uname = document.getElementById("uname").value;
  let pw = document.getElementById("pw").value;
  if (uname < 7 || pw < 7) {
    document.getElementById("error").innerHTML =
      "Invalid Username and password";
  }
}
