function calculateTip() {
  var billAmt = document.getElementById("billamount").value;
  var cars = document.getElementById("service").value;
  var numOfPeople = document.getElementById("people").value;
  if (billAmt === "" || cars == 0) {
    alert("Please enter values");
    return;
  }
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  var total = (billAmt * cars) / numOfPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function () {
  calculateTip();
};
