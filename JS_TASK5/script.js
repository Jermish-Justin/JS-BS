function validateForm() {
  const btn = document.querySelector("#sub_btn");

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var website = document.getElementById("web").value;
  var message = document.getElementById("msg").value;
  let flag = 0;

  if (name.length == 0) {
    document.getElementById("valid_name").innerHTML = "This field is required";
    document.getElementById("name").style.borderColor = "red";
    flag = 1;
  }
  if (email.length == 0) {
    document.getElementById("valid_email").innerHTML = "This field is required";
    document.getElementById("email").style.borderColor = "red";
    flag = 1;
  }
  if (website.length == 0) {
    document.getElementById("valid_web").innerHTML = "This field is required";
    document.getElementById("web").style.borderColor = "red";
    flag = 1;
  }
  if (message.length == 0) {
    document.getElementById("valid_msg").innerHTML = "This field is required";
    document.getElementById("msg").style.borderColor = "red";
    flag = 1;
  }

  if (flag) {
    return false;
  }
  return true;
}
