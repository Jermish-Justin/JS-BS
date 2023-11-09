function checkStrength_fname() {
  let fname = document.getElementById("fname").value;
  if (fname.length == 0) {
    document.getElementById("msg1").innerHTML = "POOR";
  } else {
    document.getElementById("msg1").innerHTML = "OK";
  }
}
function checkStrength_lname() {
  let lname = document.getElementById("lname").value;
  if (lname.length == 0) {
    document.getElementById("msg2").innerHTML = "POOR";
  } else {
    document.getElementById("msg2").innerHTML = "OK";
  }
}
function checkStrength_email() {
  let email = document.getElementById("email").value;
  if (email.length == 0) {
    document.getElementById("msg3").innerHTML = "POOR";
  } else {
    document.getElementById("msg3").innerHTML = "OK";
  }
}
function checkStrength_pw() {
  let pw = document.getElementById("pw").value;
  if (pw.length < 0) {
    document.getElementById("msg4").innerHTML = "POOR";
  } else if (pw.length < 7) {
    document.getElementById("msg4").innerHTML = "WEAK";
  } else {
    document.getElementById("msg4").innerHTML = "STRONG";
  }
}
function checkStrength_rpw() {
  let pw = document.getElementById("pw").value;
  let rpw = document.getElementById("r-pw").value;

  if (pw != rpw) {
    document.getElementById("msg5").innerHTML = "POOR OR MISMATCH";
  } else {
    document.getElementById("msg5").innerHTML = "OK";
  }
}
function checkStrength_age() {
  let age = document.getElementById("age").value;

  if (age >= 0) {
    document.getElementById("msg6").innerHTML = "OK";
  }
}
function checkStrength_phno() {
  let ph = document.getElementById("phno").value;

  if (ph.length == 10) {
    document.getElementById("msg7").innerHTML = "OK";
  } else if (ph.length < 10) {
    document.getElementById("msg7").innerHTML = "POOR";
  } else {
    document.getElementById("msg7").innerHTML = "POOR";
  }
}
function checkStrength_add() {
  let add = document.getElementById("add").value;

  if (add.length < 20) {
    document.getElementById("msg8").innerHTML = "POOR";
  } else {
    document.getElementById("msg8").innerHTML = "OK";
  }
}
function checkStrength_st() {
  let st = document.getElementById("state").value;

  if (st.length < 5) {
    document.getElementById("msg9").innerHTML = "POOR";
  } else {
    document.getElementById("msg9").innerHTML = "OK";
  }
}
