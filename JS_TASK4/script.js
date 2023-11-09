const date = new Date();

function showDate() {
  var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.getElementById("result1").innerHTML =
    date.getDate() +
    " / " +
    month[date.getMonth()] +
    " / " +
    date.getFullYear();
}
function showTime() {
  document.getElementById("result2").innerHTML = date;
}
