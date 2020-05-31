var css = document.querySelector("h3");
var css2 = document.querySelector("h1");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector("#color3");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");



color1.setAttribute("value", "#48D1CC");

color2.setAttribute("value", "#FFFACD");

var cssGradientProperty = window.getComputedStyle(body).getPropertyValue("background-image");

css.textContent = cssGradientProperty;

function setFontColor() {
  body.style.color = color3.value;
  css.style.color = color3.value;
  css2.style.color = color3.value;
}

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function randomHex() {
  var hex = "#" + Math.floor(Math.random()*16777216).toString(16);
  return hex
}

function generateRandomButton() {
  color1.value = randomHex();
  color2.value = randomHex();

  setGradient();
}
setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", setFontColor);

randomButton.addEventListener("click", generateRandomButton);