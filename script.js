const random = Math.floor(Math.random(1 - 6) * 6) + 1;

document.getElementById("hi").innerHTML = random;

function reset() {
  document.location.reload();
}

if (random == 1) {
  document.getElementById("1").style.visibility = "visible";
} else if (random == 2) {
  document.getElementById("2").style.visibility = "visible";
} else if (random == 3) {
  document.getElementById("3").style.visibility = "visible";
} else if (random == 4) {
  document.getElementById("4").style.visibility = "visible";
} else if (random == 5) {
  document.getElementById("5").style.visibility = "visible";
} else if (random == 6) {
  document.getElementById("6").style.visibility = "visible";
}
