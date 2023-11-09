function multiply() {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  let result = n1 * n2;
  document.getElementById("result").innerHTML = "The result is " + result;
}

function divide() {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  let result = n1 / n2;
  document.getElementById("result").innerHTML = "The result is " + result;
}
